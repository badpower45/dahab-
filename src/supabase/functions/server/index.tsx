import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js'
import * as kv from './kv_store.tsx'

const app = new Hono()

app.use('*', logger(console.log))
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

// Save booking data
app.post('/make-server-b6254d0f/booking', async (c) => {
  try {
    const body = await c.req.json()
    const { name, phone, package: packageName, people, submitted_at } = body

    if (!name || !phone || !packageName || !people) {
      return c.json({ error: 'Missing required fields' }, 400)
    }

    // Generate unique booking ID
    const bookingId = `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Save to KV store
    await kv.set(bookingId, {
      name,
      phone,
      package: packageName,
      people,
      submitted_at,
      id: bookingId
    })

    console.log(`New booking saved: ${bookingId}`)
    
    return c.json({ 
      success: true, 
      message: 'تم حفظ الطلب بنجاح',
      booking_id: bookingId 
    })

  } catch (error) {
    console.error('Error saving booking:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

// Get all bookings (optional, for admin use)
app.get('/make-server-b6254d0f/bookings', async (c) => {
  try {
    const bookings = await kv.getByPrefix('booking_')
    return c.json({ bookings })
  } catch (error) {
    console.error('Error retrieving bookings:', error)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

Deno.serve(app.fetch)