import React from 'react';

function Hello() {

    return (
        <div className="Hello">
            <form>
                <label>Name</label>
                <input type="text" id="name" name="name"></input>
                <input type="button" id="submit" value="Submit" name="Submit"></input>
            </form>
        </div>
    );

}

export default Hello;