class ConfigUtils {
    static getConfigValue(key: string, defaultValue = ''): string {
        const value = process.env[key] || defaultValue
        if (!value) {
            throw new Error(`Config value for key ${key} is not defined`)
        }
        return value
    }
}

export { ConfigUtils }
