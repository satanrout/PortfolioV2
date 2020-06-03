const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: 'bucharitesh@gmail.com',
    pass: 'cozoscihyxdvcbmq',
  },
});

admin.initializeApp();

exports.sendEmail = functions.firestore.document('contacts/{id}').onCreate((snapshot,context) => {
  const { name, email, message } = snapshot.data();
  var text = `<tr style="border-collapse:collapse;border-spacing:0 !important;">
  <td width="100%" valign="top" align="center" class="padding-container" style="border-collapse:collapse;border-spacing:0 !important;padding-top: 0px!important; padding-bottom: 18px!important; mso-padding-alt: 0px 0px 18px 0px;">
    <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" style="border-collapse:collapse;border-spacing:0 !important;">
      <tr style="border-collapse:collapse;border-spacing:0 !important;">
        <td style="border-collapse:collapse;border-spacing:0 !important;">
          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0 !important;">
            <tr style="border-collapse:collapse;border-spacing:0 !important;">
              <td style="border-collapse:collapse;box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);transition:box-shadow .45s;border-spacing:0 !important;border-radius: 3px; border-bottom: 2px solid #d4d4d4;" class="card-1" width="100%" valign="top" align="center">
                <table style="border-collapse:collapse;border-spacing:0 !important;border-radius: 3px;" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#ffffff">
                  <tr style="border-collapse:collapse;border-spacing:0 !important;">
                    <td align="center" style="border-collapse:collapse;border-spacing:0 !important;">
                      <table width="600" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse;border-spacing:0 !important;">
                        <!-- START HEADER IMAGE -->
                        <tr style="border-collapse:collapse;border-spacing:0 !important;">
                          <td align="center" class="hund ripplelink" width="600" style="border-collapse:collapse;:blockcolor:#fff;text-decoration:none;position:relative;overflow:hidden;-webkit-transition:all 0.2s ease;-moz-transition:all 0.2s ease;-o-transition:all 0.2s ease;transition:all 0.2s ease;z-index:0;border-spacing:0 !important;">
                            <img align="center" width="600" style="color:#ffffff;text-align:center;font-family:Open Sans, Helvetica, Arial, sans-serif;display:block;-ms-interpolation-mode:: bicubic;border-radius: 3px 3px 0px 0px; width: 100%; max-width: 600px!important;" class="hund" src="https://i.imgur.com/BkZGDLO.gif">
                          </td>
                        </tr>
                        <!-- END HEADER IMAGE -->
                        <!-- START BODY COPY -->
                        <tr style="border-collapse:collapse;border-spacing:0 !important;">
                          <td class="td-padding" align="left" style="border-collapse:collapse;border-spacing:0 !important;font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 24px; line-height: 30px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 13px;">
                            <div>
                                <h4>Information</h4>
                                <ul>
                                  <li>
                                    Name - ${name || ""}
                                  </li>
                                  <li>
                                    Email - ${email || ""}
                                  </li>
                                </ul>
                                <h4>Message</h4>
                                <p>${message || ""}</p>
                              </div>
                          </td>
                        </tr>
                        <tr style="border-collapse:collapse;border-spacing:0 !important;">
                          <td align="left" style="border-collapse:collapse;border-spacing:0 !important;padding: 18px 18px 18px 18px; mso-alt-padding: 18px 18px 18px 18px!important;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-spacing:0 !important;">
                              <tr style="border-collapse:collapse;border-spacing:0 !important;">
                                <td style="border-collapse:collapse;border-spacing:0 !important;">
                                  
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <!-- END BUTTON -->
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</tr>`;
  if (email === 'test@test.test') {
    snapshot.ref.set(null);
  }
    const mailOptions = {
      from: `${email}`,
      to: 'contact@bucharitesh.in',
      subject: `New message from ${name}`,
      text: text,
      html: text,
    };
    
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
          console.log(error)
          return
      }
      console.log("Sent!")
  });
  
});
