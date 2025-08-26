import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import YellowButton from '../../components/YellowButton';

const ServiceProviderCompanyPolicy = () => {
  return (
    <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
  {/* Header */}
  <div>
    <h1 className="text-2xl font-semibold text-black mb-2">Company Policies</h1>
    <p className="text-[#83898F] mb-8">
      Add unique policies including delivery, returns, exchanges, service warranties, and more.
    </p>
  </div>

  <CKEditor
    editor={ClassicEditor}
    config={{
      licenseKey: "GPL", // Or 'GPL'.
      plugins: [Essentials, Paragraph, Bold, Italic],
      toolbar: ["undo", "redo", "|", "bold", "italic", "|"],
      initialData: "<p>Hello from CKEditor 5 in React!</p>",
    }}
  />

  <div className="flex justify-end space-x-3 my-4">
    <YellowButton wFull={false} text="Save changes" />
    <button
      className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg 
                 hover:bg-gray-50 transition-colors"
    >
      Cancel
    </button>
  </div>
</div>

  )
}

export default ServiceProviderCompanyPolicy
