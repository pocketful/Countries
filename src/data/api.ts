export const BASE_URL = process.env.VITE_COUNTRIES_BASE_URL
if (!BASE_URL || typeof BASE_URL !== 'string') throw new TypeError('baseUrl not found')
