import React,{Component} from "react";
import axios from "axios";

class Clothingstore extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        code:"",
        availability:"",
        brand:"",
        colour:"",
        discount:"",
        size:"",
        type:"",
        dressData:[]
    };
    }
    componentDidMount() {
        // Fetch dress data from server when component mounts
        axios.get("http://localhost:2020/").then((response) => {
            this.setState({ dressData: response.data });
        });
    }

    handlecodeChange = (event) =>{
        this.setState({ code : event.target.value});
    };
    handleavailability = (event) =>{
        this.setState({ availability : event.target.value});
    };
    handlebrand = (event) =>{
        this.setState({ brand : event.target.value});
    };
    handlecolour = (event) =>{
        this.setState({ colour : event.target.value});
    };
    handlediscount = (event) =>{
        this.setState({ discount: event.target.value});
    };
    handlesize = (event) =>{
        this.setState({ size : event.target.value});
    };
    handletype = (event) =>{
        this.setState({ type : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            code: this.state.code,
            availability: this.state.availability,
            brand: this.state.brand,
            colour: this.state.colour,
            discount: this.state.discount,
            size: this.state.size,
            type: this.state.type
        };
        console.log(data);
        axios.post("http://localhost:2020/add", data).then((response) => {
            // Add new dress data to the state and clear the form
            this.setState({
                dressData: [...this.state.dressData, response.data],
                code:"",
                availability: "",
                brand: "",
                colour: "",
                discount: "",
                size: "",
                type: "",
            });
        });
    };

    handleUpdate = (code, data) => {
        // Send PUT request to update dress data with the given ID
        axios.put(`http://localhost:2020/update/${code}`, data).then((response) => {
            // Update the state to reflect the updated dress data
            const updatedDressData = this.state.dressData.map((dress) => {
                if (dress.code === response.data.code) {
                    return response.data;
                } else {
                    return dress;
                }
            });
            this.setState({ dressData: updatedDressData });
        });
    };

    handleDelete = (code) => {
        // Send DELETE request to remove dress data with the given ID
        axios.delete(`http://localhost:2020/del/${code}`).then((response) => {
            // Update the state to remove the deleted dress data
            const updatedDressData = this.state.dressData.filter(
                (dress) => dress.code !== code
            );
            this.setState({ dressData: updatedDressData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            code: data.code,
            availability: data.availability,
            brand: data.brand,
            colour: data.colour,
            discount: data.discount,
            size: data.size,
            type: data.type,
            isEdit: true,
        });
        console.log(this.state.code);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            code: this.state.code,
            availability: this.state.availability,
            brand: this.state.brand,
            colour: this.state.colour,
            discount: this.state.discount,
            size: this.state.size,
            type: this.state.type,
        };
        const code = this.state.code;
        console.log(code);
        axios.put(`http://localhost:2020/update/${code}`, data).then((res) => {
                console.log(res.data);
                this.setState({
                    availability: "",
                    brand: "",
                    colour: "",
                    discount:"",
                    size:"",
                    type:""
                });
                this.props.history.push("/");
            }).catch((err) => console.log(err));
        };
    render()
    {
        return(
            <div><center>
                <p><b>CLOTHING STORE</b></p>
            <form onSubmit={this.handleSubmit} className="fuel" style={{marginTop:"50px"}}>
               <label className="login-label">Code</label>

               <input
               className="fuel"
               type="number"
               value={this.state.code}
               onChange={this.handlecodeChange}
               />

               <br></br><br></br>

               <label className="login-label">Availability</label>
               <input
               className="fuel"
               type="text"
               value={this.state.availability}
               onChange={this.handleavailability}
               />
                
                <br></br><br></br>

               <label className="login-label">Brand</label>
               <input
               className="fuel"
               type="text"
               value={this.state.brand}
               onChange={this.handlebrand}
               />

<br></br><br></br>

               <label className="login-label">Colour</label>
               <input
               className="fuel"
               type="text"
               value={this.state.colour}
               onChange={this.handlecolour}
               />

<br></br><br></br>

               <label className="login-label">Discount</label>
               <input
               className="fuel"
               type="number"
               value={this.state.discount}
               onChange={this.handlediscount}
               />

<br></br><br></br>

               <label className="login-label">Size</label>
               <input
               className="fuel"
               type="text"
               value={this.state.size}
               onChange={this.handlesize}
               />

<br></br><br></br>
               <label className="login-label">Type</label>
               <input
               className="fuel"
               type="text"
               value={this.state.type}
               onChange={this.handletype}
               />

<br></br><br></br>

               <button type="submit" style={{padding:"10px",backgroundColor:"blue",color:"white"}}>
Submit
               </button>
               <br></br><br></br>
               </form>
               
               <table border={1}>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Availability</th>
                        <th>Brand</th>
                        <th>Colour</th>
                        <th>Discount</th>
                        <th>Size</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dressData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.code}</td>
                            <td>{user.availability}</td>
                            <td>{user.brand}</td>
                            <td>{user.colour}</td>
                            <td>{user.discount}</td>
                            <td>{user.size}</td>
                            <td>{user.type}</td>
                            <td>
                                <button style={{backgroundColor:"green",color:"white"}} onClick={() => this.handleEdit(user)}>Edit</button>
                            </td>
                            <td>
                                    <button style={{backgroundColor:"red",color:"white"}} 
                                        onClick={() => this.handleDelete(user.code)}>
                                        Delete
                                    </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br></br><br></br><br></br><br></br>
            <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="code" value={this.state.code} />
                    <label>Availability: </label>
                    <input
                        type="text"
                        name="availability"
                        value={this.state.availability}
                        onChange={this.handleInputChange}
                    />
                    <br /><br />
                    <label>Brand: </label>
                    <input
                        type="text"
                        name="brand"
                        value={this.state.brand}
                        onChange={this.handleInputChange}
                    />
                    <br /><br/>
                    <label>Colour: </label>
                    <input
                        type="text"
                        name="colour"
                        value={this.state.colour}
                        onChange={this.handleInputChange}
                    />
                    <br /><br/>
                    <label>Discount: </label>
                    <input
                        type="number"
                        name="discount"
                        value={this.state.discount}
                        onChange={this.handleInputChange}
                    />
                    <br /><br />
                    <label>Size: </label>
                    <input
                        type="text"
                        name="size"
                        value={this.state.size}
                        onChange={this.handleInputChange}
                    />
                    <br /><br />
                    <label>Type: </label>
                    <input
                        type="text"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleInputChange}
                    />
                    <br /><br />
                    <button type="submit" style={{margin:"25px",padding:"10px"}}>Save</button>
                    <button onClick={this.handleCancel} style={{padding:"10px"}}>Cancel</button>
                </form>
                </center></div>

        );
    }
}
export default Clothingstore