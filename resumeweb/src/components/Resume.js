import React from 'react'

export default function Resume() {
// let mystyle = {
//     height: 2,
//     width: 1000,
//     backgroundColor: 'white',
// }
// let div1style = {
//     color : 'white',
//     backgroundColor : '#000080',
//     fontSize : 20,
//     textAlign : 'center',
    
// }

    return (
        <>
            <div  >
                <div>

                    <form >
                        {/* <div > 
                        <textarea rows="3" cols="60"  style = {div1style} />
                        </div> */}
                        <div>
                            <h3 >Personal Details</h3>
                            <br />
                        </div>
                        <img src="C:\Users\Admins\Pictures\Screenshots" alt="Dyanamic Image" />
                        <div>
                            <label className='label mx-2 my-3'>
                                &nbsp;First Name:&nbsp;
                                <input type="text" />
                            </label>

                            <label className='label mx-5'>
                                &nbsp; Last Name:
                                <input type="text" />
                            </label>
                        </div>
                        <label htmlFor="birthday mx-" className='birthday mx-2 my-3'>&nbsp;Birthday:&nbsp; &#160;</label>
                        <input type="date" id="birthday" name="birthday" />
                        <div>
                            <label className='label my-3'>&nbsp;Field Of Interest:&nbsp;</label>
                            <textarea rows="1" cols="100" />

                        </div>
                        <div>
                            <label>&nbsp;Education:&nbsp;</label>
                            <textarea rows="1" cols="100" />

                        </div>

                        <button className='btn btn-primary mx-3 my-2 '>
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

