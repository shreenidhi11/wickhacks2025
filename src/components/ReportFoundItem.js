import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ReportFoundItem.css'

function ReportFoundItem() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        item_name: "",
        category: "",
        color: "",
        item_locaton: "",
        description: "",
        image_url: "",
        date_found: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        const response = await fetch("http://127.0.0.1:5000/add_found_item", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("Response from backend:", data);
    };


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Name</label>
                        <input name="name" type="text" class="form-control" id="inputEmail4" placeholder="Daniel" onChange={handleChange} required />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Email</label>
                        <input name="email" type="email" class="form-control" id="inputPassword4" placeholder="xyz@gmail.com" onChange={handleChange} required />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPhonenumber4">Phone Number</label>
                        <input name="phone" type="number" class="form-control" id="inputPhonenumber4" placeholder="1234" onChange={handleChange} />
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputAddress">Item Name</label>
                    <input name="item_name" type="text" class="form-control" id="inputAddress" placeholder="Charger" onChange={handleChange} required />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputState">Category</label>
                    <select name="category" id="inputState" class="form-control" onChange={handleChange} required>
                        <option selected>Choose...</option>
                        <option>Jewelry</option>
                        <option>Chargers</option>
                        <option>Water Bottles</option>
                        <option>Notebooks & Work</option>
                        <option>Glasses</option>
                        <option>Book bags</option>
                        <option>Lunchboxes/small bags</option>
                        <option>Jackets and Coats</option>
                        <option>Electronics</option>
                        <option>Stationary</option>
                    </select>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Color</label>
                        <input name="color" type="text" class="form-control" id="inputCity" placeholder="Pink" onChange={handleChange} required />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="inputState">Location Found</label>
                        <select name="item_location" id="inputState" class="form-control" onChange={handleChange} required>
                            <option selected>Choose...</option>
                            <option>Golisano</option>
                            <option>Wallace Library</option>
                            <option>Student Alumni Union (SAU)</option>
                            <option>Cross Roads</option>
                            <option>Polisseni Center</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="inputZip">Description</label>
                        <textarea name="description" type="text" class="form-control" id="inputZip" placeholder="I found a chemistry book on 27th feb 2025. I think I found it near Saunders College" onChange={handleChange} required />
                    </div>

                    <div class="form-group col-md-6">
                        <label for="inputZip">Image Upload</label>
                        <input name="image_url" type="file" class="form-control" id="inputZip" onChange={handleChange} />
                    </div>

                    <div class="form-group col-md-4">
                        <label for="inputZip">Date Found</label>
                        <input name="date_found" type="date" class="form-control" id="inputZip" onChange={handleChange} required />
                    </div>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ReportFoundItem;