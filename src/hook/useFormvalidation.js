
export const useFormvalidation = () => {
    const validate = (name, value) => {
        switch (name) {
          case "name":
            if (!value.trim()) {
              return "Name is required";
            } else if (value.length < 3) {
              return "Name must be at least 3 characters";
            } else {
              return false;
            }
          case "phoneNo":
            const mobileRegex = /^[6-9]\d{9}$/;
            if (!value.trim()) {
              return "Mobile number is required";
            } else if (!mobileRegex.test(value)) {
              return "Enter a valid 10-digit Indian mobile number";
            } else {
              return false;
            }
        }
      };

      return{validate}
}



