import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://odzfukpgxhnlghxzyhiz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kemZ1a3BneGhubGdoeHp5aGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMDg5OTcsImV4cCI6MjA3MTY4NDk5N30.D3_3u34W0Bdk6wGwTtY2li5H5eHMVpllBwv66UnBaIM'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return { success: false, error }
  }
}

// Preregistration form submission
export const submitPreregistrationForm = async (formData) => {
  try {
    console.log('Submitting preregistration data:', formData);
    
    // Create clean data object
    const cleanData = {
      name: formData.name || '',
      email: formData.email || '',
      phone: formData.phone || null,
      travel_dates: formData.travelDates || null,
      group_size: formData.groupSize || null,
      special_requests: formData.specialRequests || null
    };
    
    console.log('Clean data to insert:', cleanData);
    
    const { data, error } = await supabase
      .from('preregistrations')
      .insert(cleanData)
      .select();

    if (error) {
      console.error('Detailed Supabase error:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw error;
    }
    
    console.log('Preregistration success:', data);
    return { success: true, data }
  } catch (error) {
    console.error('Full error object:', error);
    return { 
      success: false, 
      error: error.message || 'Unknown error occurred',
      details: error.details || null
    };
  }
}