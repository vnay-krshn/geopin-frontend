import React,{useContext} from 'react'
import {OptionsContext} from '../comp/optionsContext'

const UserEdit=()=>{

    const {userEditVisibility} = useContext(OptionsContext)
    const[visibleUserEdit, setUserEditVisible] = userEditVisibility

    return(
        <div className="useredit">
                <div className="editprofile">
                        <div className="edit-title">Edit Profile</div>
                        <div className="profile-pic">
                            <img id="user-pic" src='/imgs/user_image_bitmap.svg'></img>
                            <img id="user-pic-edit" src="/imgs/edit_photo.svg"></img>
                        </div>
                        <form className="profile-edit-form">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="John Pete"></input>
                            </div>
                            <div class="form-group">
                                <label>Nationality</label>
                                <input placeholder="Indian"></input>
                            </div>
                            <div class="form-group">
                                <label>Phone number</label>
                                <input placeholder="94465784546"></input>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="josephpete@gmail.com"></input>
                            </div>
                        </form>
                 </div>
                 <button id="edit-done" onClick={()=>setUserEditVisible(!(visibleUserEdit))}>DONE</button>
        </div>
    )
}

export default UserEdit