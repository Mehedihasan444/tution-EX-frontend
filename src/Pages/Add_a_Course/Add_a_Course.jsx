import { useFieldArray, useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import {toast} from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

// imagebb auth credentials
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddACourse = () => {
  const {user}=useAuth()
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "playlist",
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
    const {image,...rest}=data
    if (res.data.success) {
      const new_course = {
        ...rest,
        image:res.data.data.display_url,
        discount:0,
        avg_rating:0,
        no_rating:0,
        no_enrollment:0,
        no_lesson:0,
        productCategory:'course',
        author:{
            author_id:author_id,
        author_name: user?.displayName,
        author_email:user?.email,
        author_phone:'017xxxxxxxx',
        author_img:user?.photoURL
        }
      
      };
      //   Post product information on database
      const productInfo = await axiosPublic.post("/courses", new_course);

      if (productInfo?.data?.insertedId) {
        toast.success("Course Successfully added!!!");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="h-screen overflow-y-auto w-full flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold">Add a Course</h2>
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
          <div className="mb-4 w-1/4">
            <label htmlFor="sub_category" className="block text-gray-700">
              Sub Category:
            </label>
            <input
              type="text"
              id="sub_category"
              name="sub_category"
              placeholder="sub_category"
              {...register("sub_category", { required: true })}
              className="input input-bordered mt-1 block w-full"
            />
            {errors.sub_category && (
              <span className="text-red-500">Sub Category is required</span>
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
            <input
              type="text"
              id="category"
              placeholder="Enter category..."
              name="category"
              {...register("category", { required: true })}
              className="input input-bordered mt-1 block w-full"
            />
            {errors.category && (
              <span className="text-red-500">Category is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="starting_date" className="block text-gray-700">
              Starting Date:
            </label>
            <input
              type="date"
              id="starting_date"
              name="starting_date"
              {...register("starting_date", { required: true })}
              className="input input-bordered mt-1 block w-full"
            />
            {errors.starting_date && (
              <span className="text-red-500">Starting Date is required</span>
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

        {/* Add Intro Video Section */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Intro Video
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                {...register("intro.videoId", { required: true })}
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
                {...register("intro.title", { required: true })}
                placeholder="Intro Video Title"
                className="input input-bordered mt-1 block w-full"
              />
              {errors.intro?.title && (
                <span className="text-red-500">Title is required</span>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("intro.duration", { required: true })}
                placeholder="Intro Duration"
                className="input input-bordered mt-1 block w-full"
              />
              {errors.intro?.duration && (
                <span className="text-red-500">Duration is required</span>
              )}
            </div>
          </div>
        </div>

        {/* Video Playlist Section */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Video Playlist
          </label>
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="mb-4 grid grid-cols-4 gap-4 items-end"
            >
              <input
                type="text"
                defaultValue={item.videoId}
                {...register(`playlist.${index}.videoId`)}
                placeholder="Video ID"
                className="input input-bordered mt-1 block w-full"
              />
              <input
                type="text"
                defaultValue={item.title}
                {...register(`playlist.${index}.title`)}
                placeholder="Title"
                className="input input-bordered mt-1 block w-full"
              />
              <input
                type="text"
                defaultValue={item.duration}
                {...register(`playlist.${index}.duration`)}
                placeholder="Duration"
                className="input input-bordered mt-1 block w-full"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ videoId: "", title: "", duration: "" })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Video
          </button>
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

export default AddACourse;
