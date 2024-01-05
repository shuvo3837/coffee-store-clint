import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const posting = form.posting.value;
        const image = form.image.value;

        const newCoffee = { name, chef, category, salary, description, posting, image }
        console.log(newCoffee)

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Uesr added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })

    }


    return (

        <div>
            <div className="bg-[#F4F3F0] px-24 py-12 my-5">
                <h1 className="text-4xl text-black font-semibold text-center">Add New Coffee</h1>
                <p>
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleAddCoffee}>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="coffee name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">chef</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder=" Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">price Range</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="salary" placeholder="price Range" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">coffee details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder=" details" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text"> Posting Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" name="posting" placeholder=" Posting Date" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-outline w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;