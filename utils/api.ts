/**
 * Base API configuration
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

/**
 * Generic fetch wrapper with error handling
 */
async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

/**
 * GET request
 */
export async function get<T>(endpoint: string): Promise<T> {
  return fetchApi<T>(endpoint, { method: 'GET' })
}

/**
 * POST request
 */
export async function post<T>(endpoint: string, data: any): Promise<T> {
  return fetchApi<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

/**
 * PUT request
 */
export async function put<T>(endpoint: string, data: any): Promise<T> {
  return fetchApi<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

/**
 * DELETE request
 */
export async function del<T>(endpoint: string): Promise<T> {
  return fetchApi<T>(endpoint, { method: 'DELETE' })
}

/**
 * Upload file
 */
export async function uploadFile<T>(
  endpoint: string,
  file: File,
  onProgress?: (progress: number) => void
): Promise<T> {
  const formData = new FormData()
  formData.append('file', file)

  const xhr = new XMLHttpRequest()
  
  return new Promise((resolve, reject) => {
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable && onProgress) {
        const progress = (event.loaded / event.total) * 100
        onProgress(progress)
      }
    })

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText)
          resolve(response)
        } catch (error) {
          reject(new Error('Invalid JSON response'))
        }
      } else {
        reject(new Error(`Upload failed with status: ${xhr.status}`))
      }
    })

    xhr.addEventListener('error', () => {
      reject(new Error('Upload failed'))
    })

    xhr.open('POST', `${API_BASE_URL}${endpoint}`)
    xhr.send(formData)
  })
} 