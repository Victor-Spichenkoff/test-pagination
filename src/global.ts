export const code_key = '__chave_codigo'

// export const baseUrl = 'http://localhost:2006'
export const baseUrl = process.env.NODE_ENV == "production" ? 'https://pagination-api-ugwo.onrender.com' : "http://localhost:2006" 
