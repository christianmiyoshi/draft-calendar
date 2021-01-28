export const chunk = <T>(array:T[], size: number) => {
    return array.reduce((acc: T[][], _, i) => {
        if (i % size === 0) acc.push(array.slice(i, i + size))
        return acc
      }, []);    
}