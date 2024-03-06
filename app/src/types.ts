import type { restaurantStatusList, dietList } from '@/constants'

/**
 * Restaurant
 */
export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: Status
  diet?: Diet
}

/**
 * Dish type
 */
export type Dish = {
  id: string
  name: string
  status: Status
  diet?: Diet
}

/**
 * Status type
 */
// export type Status = 'Want to Try' | 'Recommended' | 'Do Not Recommend'
export type Status = typeof restaurantStatusList[number]

export type Diet = typeof dietList[number]
