export const getEmail = (fullname: string, otp: string, isSignup = true) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title></title>
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
       
       <style type="text/css">
           /* FONTS */
           @media screen {
               @font-face {
                   font-family: 'Lato';
                   font-style: normal;
                   font-weight: 400;
                   src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: normal;
                   font-weight: 700;
                   src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: italic;
                   font-weight: 400;
                   src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: italic;
                   font-weight: 700;
                   src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
               }
           }
    
           /* CLIENT-SPECIFIC STYLES */
           body,
           table,
           td,
           a {
               -webkit-text-size-adjust: 100%;
               -ms-text-size-adjust: 100%;
           }
    
           table,
           td {
               mso-table-lspace: 0pt;
               mso-table-rspace: 0pt;
           }
    
           img {
               -ms-interpolation-mode: bicubic;
           }
    
           /* RESET STYLES */
           img {
               border: 0;
               height: auto;
               line-height: 100%;
               outline: none;
               text-decoration: none;
           }
    
           table {
               border-collapse: collapse !important;
           }
    
           body {
               height: 100% !important;
               margin: 0 !important;
               padding: 0 !important;
               width: 100% !important;
           }
    
           /* iOS BLUE LINKS */
           a[x-apple-data-detectors] {
               color: inherit !important;
               text-decoration: none !important;
               font-size: inherit !important;
               font-family: inherit !important;
               font-weight: inherit !important;
               line-height: inherit !important;
           }
    
           /* ANDROID CENTER FIX */
           div[style*="margin: 16px 0;"] {
               margin: 0 !important;
           }
       </style>
    </head>
    <body style="margin: 0 !important; padding: 0 !important;">
       <table border="0" cellpadding="0" cellspacing="0" width="100%">
           <!-- LOGO -->

           <!-- HERO -->
           <tr>
               <td style="padding: 0px 10px 0px 10px;">
                   <table border="0" cellpadding="0" cellspacing="0">
                       <tr>
                           <td valign="top"
                               style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400;">
                               <p style="margin: 0 0 15px;">Your verification code: </p>
                               <strong style="color: #54BAB9">${otp} </strong>
                               <p style="margin: 15px 0 0;"> The verification code will be valid for 2 minutes. Do not share this code with anyone. Don't recognize this activity? Contact <strong>customer support</strong> immediately.</p>
                               <p style="margin: 10px 0;"><i>This is automated message, do not reply.</i></p>
                               <hr style="margin: 60px 0 15px" />
                              </td>
                       </tr>
                   </table>
               </td>
           </tr>
           <!-- COPY BLOCK -->
         
           <!-- COPY CALLOUT -->
           <tr>
               <td bgcolor="#F4F4F4" align="center" style="padding: 0px 10px 0px 10px;">
                   <table border="0" cellpadding="0" cellspacing="0">
                   </table>
               </td>
           </tr>
       </table>
    </body>
    </html>`;
};
