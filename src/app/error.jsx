"use client";
import Container from "@/Components/Container/Container";

const Error = () => {
  return (
    <>
      <Container>
        <div className="flex justify-center items-center w-screen h-screen bg-pink-200">
          <h1 className="text-center text-2xl my-4 font-bold">
            Server Crashed
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Error;
