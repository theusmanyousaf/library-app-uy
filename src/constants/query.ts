const queryArray: string[] = ['fiction', 'adventure', 'motivation', 'science', 'tech', 'google', 'finance', 'noval', 'self improvement', 'python', 'reactjs']
export const query: string = queryArray[Math.floor(Math.random() * queryArray.length)]

const getRandomIndex = (arr: string[]) => crypto.getRandomValues(new Uint32Array(1))[0] % arr.length;
const index = getRandomIndex(queryArray)
export const query2: string = queryArray[index]