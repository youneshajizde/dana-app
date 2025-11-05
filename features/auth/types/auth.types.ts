export type SendOTPResponse = {
  data: null;
  meta: {
    code: string;     
    message: string;    
    source: string;
    version: string;
    timestamp: number;
    requestId: string;
  };
};
