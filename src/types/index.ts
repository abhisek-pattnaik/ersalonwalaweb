/**
 * TypeScript type definitions
 * Shared types and interfaces for the application
 */

// Example types - customize based on your salon app needs
export interface User {
  id: string
  name: string
  email: string
}

export interface Appointment {
  id: string
  customerId: string
  serviceId: string
  date: Date
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}
