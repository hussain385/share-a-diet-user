import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

/**
 * Function name to ignore toast from showing (mutation)
 */
const ignoreMutations = ["generateSummary"];

/**
 * Log a warning and show a toast!
 */
const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (
      isRejectedWithValue(action) &&
      (action?.meta?.arg as any)?.type === "mutation" &&
      (action?.meta as any)?.baseQueryMeta?.response?.status !== 401 &&
      !ignoreMutations.includes((action?.meta?.arg as any)?.endpointName)
    ) {
      let ErrorMessage: string =
        (action.payload as any)?.data?.message || "Something went wrong!";

      if (
        ErrorMessage === "Something went wrong!" &&
        (action.payload as any)?.status === "FETCH_ERROR"
      ) {
        ErrorMessage = "Network error!";
      }

      Toast.show({
        type: "error",
        text2: ErrorMessage,
      });
    }

    return next(action);
  };

export default rtkQueryErrorLogger;
