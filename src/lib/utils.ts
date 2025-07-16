export function cn(...inputs: ClassValue[]) {
  return inputs.map(classNames).join(' ')
}

function classNames(...inputs: ClassValue[]) {
  return inputs.map(input => {
    if (input === undefined || input === null || input === '') {
      return ''
    }
    if (typeof input === 'boolean' || typeof input === 'number') {
      return input.toString()
    }
    if (typeof input === 'object') {
      return Object.entries(input).reduce<string[]>((acc, [key, value]) => {
        if (value) acc.push(key)
        return acc
      }, [])
    }
    return input
  }).filter(Boolean).join(' ')
}

type ClassValue = string | number | boolean | null | undefined | ClassValue[] | Record<string, any>
