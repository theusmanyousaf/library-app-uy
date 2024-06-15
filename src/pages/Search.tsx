
export default function Search() {
    return (
        <>
            <div className='grid my-20 justify-center'>
                <div>
                    <h1 className="font-bold text-4xl mt-12">Search Books</h1>
                </div>
                <div className='mt-12'>
                    <input className="border-gray-100 rounded py-4 pl-4 pr-52" placeholder="Search query" name="searchbar" />
                </div>
            </div>
        </>
    )
}
