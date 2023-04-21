import supabase from "../client/SuperbaseClient";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const uploadImage = async (file) => {
  const { data, error } = await supabase.storage
    .from("images")
    .upload(file.name, file, {
      cacheControl: "3600",
      upsert: true,
    });
  if (error) {
    throw error;
  }
  return data.path;
};

module.exports = { classNames, uploadImage };
