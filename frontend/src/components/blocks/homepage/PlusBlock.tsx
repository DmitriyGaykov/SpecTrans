import './../../../assets/scss/homepage.scss'
import React from "react";

export type PlusBlockType = {
    svg: string,
    text: string
}

const PlusBlock = ({ svg, text } : PlusBlockType) => {
    return (
        <div className="plus-block pe-1 ps-2 py-1 d-flex w-100 gap-2 align-items-center">
            <img src={svg} alt='' />
            <div className="text">
                {
                    text?.split(' ').map(word => {
                        if(!isNaN(parseInt(word))) {
                            return <span className="highlight text-success">{ word + " " }</span>
                        }
                        return word + " ";
                    })
                }

            </div>
        </div>
    )
}

export default PlusBlock