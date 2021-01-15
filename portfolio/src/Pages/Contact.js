import React from 'react';

const Contact = () => {
    return (
        <form style={{"margin-left": "25%", "margin-right": "25%", "margin-top": "5%", "margin-bottom": "10%"}}>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">
                    <h4>Name</h4>
                </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">
                    <h4>Email Address</h4>
                </label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
            </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                        <h4>Message</h4>
                    </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default Contact 