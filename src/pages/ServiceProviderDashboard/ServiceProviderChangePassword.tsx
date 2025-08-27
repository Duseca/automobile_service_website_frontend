import { useState } from "react";
import YellowButton from "../../components/YellowButton";

interface Passwords {
  oldPassword: string;
  newPassword: string;
  retypePassword: string;
}

interface ShowPassword {
  oldPassword: boolean;
  newPassword: boolean;
  retypePassword: boolean;
}

interface Errors {
  oldPassword?: string;
  newPassword?: string;
  retypePassword?: string;
}
const ServiceProviderChangePassword = () => {
     const [passwords, setPasswords] = useState<Passwords>({
        oldPassword: "",
        newPassword: "",
        retypePassword: "",
      });
    
      const [showPassword, setShowPassword] = useState<ShowPassword>({
        oldPassword: false,
        newPassword: false,
        retypePassword: false,
      });
    
      const [errors, setErrors] = useState<Errors>({});
    
      const handlePasswordChange = (field: keyof Passwords, value: string) => {
        setPasswords((prev) => ({
          ...prev,
          [field]: value,
        }));
    
        // Clear error when user starts typing
        if (errors[field]) {
          setErrors((prev) => ({
            ...prev,
            [field]: "",
          }));
        }
      };
    
      const togglePasswordVisibility = (field: keyof ShowPassword) => {
        setShowPassword((prev) => ({
          ...prev,
          [field]: !prev[field],
        }));
      };
  return (
      <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-2">
            Change password
          </h1>
          <p className="text-[#83898F]">
            Ensure your account stays secure by updating your password
            regularly.
          </p>
        </div>
      </div>

      <div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Old Password
            </label>
            <div className="relative">
              <input
                type={showPassword.oldPassword ? "text" : "password"}
                value={passwords.oldPassword}
                onChange={(e) =>
                  handlePasswordChange("oldPassword", e.target.value)
                }
                placeholder="Must have at least 6 characters"
                className={`w-full px-3 py-2.5 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.oldPassword ? "border-red-300" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("oldPassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary text-sm font-medium "
              >
                {showPassword.oldPassword ? "hide" : "show"}
              </button>
            </div>
            {errors.oldPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.oldPassword}</p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword.newPassword ? "text" : "password"}
                value={passwords.newPassword}
                onChange={(e) =>
                  handlePasswordChange("newPassword", e.target.value)
                }
                placeholder="Must have at least 6 characters"
               className={`w-full px-3 py-2.5 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.oldPassword ? "border-red-300" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("newPassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary text-sm font-medium "
              >
                {showPassword.newPassword ? "hide" : "show"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Retype New Password
            </label>
            <div className="relative">
              <input
                type={showPassword.retypePassword ? "text" : "password"}
                value={passwords.retypePassword}
                onChange={(e) =>
                  handlePasswordChange("retypePassword", e.target.value)
                }
                placeholder="Must have at least 6 characters"
               className={`w-full px-3 py-2.5 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.oldPassword ? "border-red-300" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("retypePassword")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary text-sm font-medium "
              >
                {showPassword.retypePassword ? "hide" : "show"}
              </button>
            </div>
          </div>

          {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
      <YellowButton
        wFull={false}
        text="Save Changes"
      />
      <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Cancel
      </button>
    </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceProviderChangePassword
