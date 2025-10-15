import Container from "@/components/container/Container";
import { InputFile } from "@/components/input/FileInput";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <Container
          title={"PDF Converter"}
          description={
            "This is an example for PDF converter. Drop your word file to be converted to PDF File."
          }
        >
          <InputFile label={"PDF File"} id={"pdf-file"} />
        </Container>
      </main>
    </div>
  );
}
