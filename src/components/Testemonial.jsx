import React from 'react'

const Testemonial = ({ name,comapny, text }) => {
    return (
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 ">
        <img class="w-24 h-24 md:w-48 md:h-48  md:rounded-none rounded-full mx-auto" src="/user.png" alt="" width="384" height="512" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
             {text}
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              {name}
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
