/* eslint-disable react-refresh/only-export-components */
import axios from 'axios'
import { API_URL } from '../services/apiService'
import { createContext, useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true,
})


api.interceptors.request.use(
    async (config) => {
        if (config.method !== 'get') {
            try {
                const response = await axios.get(`${API_URL}get_token`, { withCredentials: true })
                const token = response.data.token
                config.headers['X-CSRFToken'] = token
            } catch (error) {
                console.error('Error fetching CSRF token:', error)
            }
        }
        return config
    }
)

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const reponse = await api.get('user-info');
                setUser(reponse.data);
            } catch (error) {
                console.error('Error fetching user info:', error)
                setUser(null)
            } finally {
                setLoading(false)
            }
        } 

        checkAuth()
    }, [])

    const register = async (name, phone, password, confirm_password) => {
        try {
            await api.post('register', {name, phone, password, confirm_password})
            const userInfo = await api.get('user-info')
            setUser(userInfo.data)
            navigate('/')
            return {success: true}
        } catch (error) {
            return {success: false, error: error.response?.data.error || 'Register Failed'}
        }
    } 


    const login = async (phone, password) => {
        try {
            await api.post('login', { phone, password })
            const userInfo = await api.get('user-info')
            setUser(userInfo.data)
            navigate('/')
            return {success: true}
        } catch (error) {
            return {success: false, error: error.response?.data.error || 'Login failed'}
        }
    }

    const logout = async () => {
        try {
            await api.post('logout')
            setUser(null)
            navigate('/login')
            return {success: true}
        } catch {
            return {success: false, error: 'Logout failed'}
        }
    }

    const value = {
        user,
        loading,
        register,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}