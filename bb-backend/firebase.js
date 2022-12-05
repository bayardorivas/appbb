import admin from "firebase-admin";

const type = "service_account";
const project_id = "badbank-b2097";
const private_key_id = "cbf1275b4c1c91a1d9540531a57b8b66e41e2b78";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCuEAhXDbDjVvot\ny9Nduiq1vLzGwbj8bDrRLLdLuK2UhEiTGrl+cTdoA+hA9m17OePOn2mqFVy3B93w\n6T+SSeq29qQmzGr23FGeE3C3YHxm6tfCtd/iwur3k8TDXGDUOzwQtKsETndwWD0g\nAQ6K3nMXQ5ezeYZHPjqIrL6Vn3f38ABhgOrj+/mfAAoasc/VRJw4Dvz2KAAbmXhC\nqQRzxFm1P+8grtknsa4O07xedDVYNe0IjPc/YGAekAzfHknrUEOq+I/mIOQrOQl0\nVpv3NuOilOCyqAXMz+vIA3LjSVLuZ8vYOgcHvSM1BHIaSClu0vTciblYwtoYSfCM\nkSnzXYyJAgMBAAECggEAKEiLGZSQUcjlHPitWeV2MXm06b3XQUoOAa9620IqH/NO\ndYcLk20B0OeIlpJBi7F93Kmtk2CexLhEH9dncER9lur1WgpYnfmmxPIEVdg1aj8j\nAIvFfQ41wWb4NGtaeHud/tLFOnmrcDtnqBK+ihqJ4cIxp2ZyUmYfN1bdQ7T0l5NX\n9cfckwMEIIBfhkOHP84wxxWJ5biA8+kwfUeC9nhoCp/wbekYnbE4PtJHp6FEXADp\nIUYWz/5nIOTlTsYx6N1+e2qWF0ucPvNYrWhyL/0Vr87IZ3bMGohr3UIdp4tcP+ay\n1AAxzVroXlZgXQLqU7quw36YaWKZtlq+cDLUNvvCdQKBgQDxmU93rQZHeYJs1Zry\nsvFIM4fmAObn0rAfORiFFbSqsrdVVCD1Uc20h4tn+h3RTdktYfLMgNZ4FnMmjgYR\n4VBq9PtB6Xh8DnigNFJX31bjrPkzj60jD7FPlKc/wMScvTnG4dSUJJ3nqiFCzhFk\nd47pBoQuxwNwQdQ8ms4kA8GJnQKBgQC4cCZN5PEG0ju/+D61na7Ny6Iq0uZab+x3\nwKMDapzUZBZXTw/4z4JO+ZquHGlC1xXNTFLyYacgCsd+0+lBc7cRssb1xgtNGfx3\nf+h1BEDe8VWK7aHYrYYAP7t/P/RHE6ObmowniWE9kn7Y6DrH3/6UKzwoSmB7qG7U\nE+cGxCTA3QKBgBgww5Y2CuTpM7f2A1e9tw8FqdvLx1L684uMyfm5XKei0VyH2ez2\nTeR/lePJVWb5pn82yXrUg6TuioUXv1/W8ZhkAyxsVhYF1OolkwEdabPOQ/13q1xR\nW+2d8skdYhJXmAtj3UcgC3eAv2fS/kbS+co3TtDoOF3rGXcgAPf2MFC5AoGBAKBo\nOYgpg06xbXHKT4/Y8fzeC84+2kTxbrHAAoaoJHm8CoooovV8VBKnl1WyNAID2lxQ\n8xsGvzlo5pRxbT6VizSDTfLXKWEHJsIvplaPOnQrZICNp+MxF4gD5egIEUX32KUu\nRpLkMoRAcr3nS6gmMd1ftNQ9y6gAl1MvdBA4atapAoGBAOoi7ats1E+6eEfA2GFj\nRiI//NCz1jmUOPHfUNImSROyyp9HW6kvQpFjRdXVxcCxcZUuXFkXbltqfvybYB93\nARY3kWOU/56iN+QMZOkFmxbwFM6/CK/e1oBbXiX8SYab7QIaXXPCqTVVLC4hWfWg\nghfmBcfLtxWtwIEIGZHTcP9o\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-rrmbw@badbank-b2097.iam.gserviceaccount.com";
const client_id = "104092574146344891441";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rrmbw%40badbank-b2097.iam.gserviceaccount.com";

// Credentials that grants access to Firebase services

admin.initializeApp({
  credential: admin.credential.cert({
    type,
    project_id,
    private_key_id,
    private_key:
      private_key.replace(/\\n/g,'\n'),
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url
  }),
});

export default admin;