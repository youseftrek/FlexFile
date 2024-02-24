import Dropzone from "@/components/shared/Dropzone";

export default function Home() {
  return (
    <section className="max-w-[1920px] w-full p-8 mb-4 flex flex-col justify-center items-center mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-3xl md:text-4xl text-center mb-3">
          Transform Your Files <br /> Effortlessly
          <span className="font-bold text-xl"> with </span>
          <span className="text-primary">FlexFile.</span>
        </h1>
        <p className="text-center opacity-50 max-w-[500px] mb-6 p-2">
          Elevate your productivity with our intuitive online file converter.
          Seamlessly convert images, videos, and more between different formats
          with just a few clicks. Say goodbye to compatibility issues and
          embrace the convenience of our versatile file conversion tool.
        </p>
        <div className="w-screen flex justify-center">
          <Dropzone />
        </div>
      </div>
    </section>
  );
}
