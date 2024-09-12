import React from 'react'

const Testemonial = ({ name, comapny, text }) => {
    return (
        <figure class="md:flex w-[80%] max-w-[1200px] m-auto md:h-[30vh] bg-slate-100 rounded-xl md:text-lg h-[415px] text-xs p-8 md:p-0 dark:bg-gray-900">
            <img class="w-24 h-24 md:w-48 md:h-auto object-cover sm:w-36 sm:h-auto md:rounded-none rounded-full mx-auto" src="/person.jpg" alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 flex flex-col justify-between text-center md:text-left space-y-4">
                <blockquote>
                    <p class="text-sm md:text-lg font-medium ">
                        “{text}”
                    </p>
                </blockquote>
                <figcaption class="font-medium">
                    <div class="text-sky-500  dark:text-sky-400">
                        <p>{name}</p>
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                        {comapny}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Testemonial
