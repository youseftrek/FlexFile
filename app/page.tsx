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
          Welcome to FlexFile – the ultimate multimedia conversion powerhouse that revolutionizes
          the way you transform images, audio files, and videos. With FlexFile, unleash your
          creativity with unprecedented freedom, all at absolutely no cost! Say goodbye to
          limitations and hello to limitless creative possibilities.
        </p>
        <div className="w-screen flex justify-center">
          <Dropzone />
        </div>
      </div>
    </section>
  );
}
