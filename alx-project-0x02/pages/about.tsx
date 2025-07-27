import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <h1 className="text-4xl font-bold text-green-700">About Page</h1>
      <p className="mt-2 text-lg text-gray-700">Learn more about this project.</p>

      <div className="flex flex-col space-y-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
        <Header />
      <div className="flex flex-col items-center min-h-screen bg-green-50 space-y-6 p-6">
       
      </div>
      </div>
    </div>
  );
}
