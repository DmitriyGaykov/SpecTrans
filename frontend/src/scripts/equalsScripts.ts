export const isThisOrNull = (value?: any, expected_value?: any) => {
    return value == null || value === expected_value
}