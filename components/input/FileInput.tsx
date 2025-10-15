import { Input } from "@/components/ui/input";

type InputFileProps = {
  label: string;
  id: string;
};

export function InputFile({ label, id }: InputFileProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Input
          id={id}
          type="file"
          className="cursor-pointer border-2 border-dashed border-gray-900 rounded-lg text-gray-900 bg-gray-50 hover:bg-blue-50 file:mr-3 file:rounded-md file:border-0 file:bg-blue-600 file:px-5 file:py-1 file:text-white file:font-semibold"
        />
      </div>
    </div>
  );
}
