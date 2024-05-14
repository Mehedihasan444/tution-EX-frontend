import { useFieldArray, useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

// imagebb auth credentials
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddSoftwares = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      intro: {
        videoId: "",
        title: "",
        duration: "",
      },
      playlist: [],
    },
  });
  const axiosPublic = useAxiosPublic();
  // Generate a unique ID for the warranty
  const [author_id] = useState(uuidv4());

  const onSubmit = async (data) => {
    console.log(data);
    //hosting the product image on imagebb and getting the direct link of the image
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const { image, ...rest } = data;

    if (res.data.success) {
      const new_software = {
        ...rest,
        img: res.data.data.display_url,
        rating: 5,
        productCategory:'software',
        email: user?.email,
        author: user?.displayName,
      };
      //   Post product information on database
      const productInfo = await axiosPublic.post(
        "/all-softwares",
        new_software
      );

      if (productInfo?.data?.insertedId) {
        toast.success("Course Successfully added!!!");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="h-screen overflow-y-auto w-full flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold">Add a Software</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto p-10 bg-white shadow-md rounded-md"
      >
        <div className="flex flex-row justify-between items-center gap-5">
          <div className="mb-4 w-3/4">
            <label htmlFor="title" className="block text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              placeholder="Enter title..."
              className="input input-bordered mt-1 block w-full"
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-5">
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">
              Price:
            </label>
            <input
              type="number"
              id="price"
              placeholder="price"
              name="price"
              {...register("price", { required: true })}
              className="input input-bordered mt-1 block w-full"
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">
              Category:
            </label>
            <select
              type="text"
              {...register("category", { required: true })}
              className="input input-bordered mt-1 block w-full"
            >
              <option selected="Enter category...">Select Software type</option>
              <option value="web-app">web-app</option>
              <option value="wordpress">wordpress</option>
              <option value="custom-web-app">custom-web-app</option>
              <option value="photoshop">photoshop</option>
            </select>
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">
              Course cover photo:
            </label>
            <input
              id="image"
              placeholder="image"
              name="image"
              {...register("image", { required: true })}
              type="file"
              className="file-input mt-1 w-full max-w-xs file-input-bordered "
            />

            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description:
          </label>
          <textarea
            placeholder="Enter description..."
            id="description"
            name="description"
            {...register("description")}
            className="textarea	textarea-bordered mt-1 block w-full"
          />
        </div>
        {/* Add Intro Video Section */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Details
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                {...register("videoId", { required: true })}
                placeholder="Intro Video ID"
                className="input input-bordered mt-1 block w-full"
              />
              {errors.intro?.videoId && (
                <span className="text-red-500">Video ID is required</span>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("liveLink")}
                placeholder="Software Live-link"
                className="input input-bordered mt-1 block w-full"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSoftwares;
