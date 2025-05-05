import React from "react";
function Card({tittle, firstUser, secondUser, thirdUser, secondtittle}) {
    return(
        <>
        <div className="w-full flex gap-5">
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-30">
        <img
          src="src/assets/my-image.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {tittle}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{firstUser}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-30">
        <img
          src="src/assets/second.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {tittle}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{secondUser}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-30">
        <img
          src="src/assets/third.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {secondtittle}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{thirdUser}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
      </div>
      </>
    )
}

export default Card;