import * as Yup from "yup";

export const SpaSchema = Yup.object().shape({
  spaName: Yup.string().required("Spa Name is required"),
  city: Yup.string().required("City is required"),
  area: Yup.string().required("Area is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Must be positive"),
  timing: Yup.string().required("Timing is required"),
});
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
