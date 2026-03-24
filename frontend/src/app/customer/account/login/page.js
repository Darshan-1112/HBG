"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/**
 * LoginPage — Next.js Client Component
 * ─────────────────────────────────────────────────────────────────────────────
 * • Zero DOM manipulation — all state via useState
 * • Zero inline CSS — all classes from a11.css additions (see changes below)
 * • Password show/hide via React state only
 * • Form data POSTed to JSONPlaceholder as demo API call
 * ─────────────────────────────────────────────────────────────────────────────
 */

export default function LoginPage() {
  // ── Form state ──────────────────────────────────────────────────────────────
  const [email,     setEmail]     = useState("");
  const [password,  setPassword]  = useState("");
  const [saveLogin, setSaveLogin] = useState(true);
  const [showPass,  setShowPass]  = useState(false);

  // ── UI state ────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const [success, setSuccess] = useState(false);

  // ── Submit handler ───────────────────────────────────────────────────────────
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email.trim())    { setError("Please enter your email address."); return; }
    if (!password.trim()) { setError("Please enter your password.");       return; }

    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ username: email, password, saveLogin }),
      });
      if (!res.ok) throw new Error("Login failed. Please try again.");
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [email, password, saveLogin]);

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <section className="login">
      <div className="container">
        <div className="login-page-wrapper d-flex flex-column justify-content-center align-items-center">

          {/* ── Logo ── */}
          <div className="text-center mb-4 logo-box">
            <img
              src="https://hbgsolo.com/static/frontend/Hbg/theme1/en_US/images/solo-menu-logo.png"
              alt="Solo Health Collective"
              className="login-logo"
            />
          </div>

          {/* ── Login Card ── */}
          <div className="login-card shadow p-4">
            <h2 className="text-center text-md-start">Sign In</h2>
            <p className="text-center text-md-start">Enter your email and password</p>

            {/* ── Success alert ── */}
            {success && (
              <div className="alert alert-success text-center mb-3" role="alert">
                Signed in successfully!
              </div>
            )}

            {/* ── Error alert ── */}
            {error && (
              <div className="alert alert-danger text-center mb-3" role="alert">
                {error}
              </div>
            )}

            <form id="login-form" noValidate onSubmit={handleSubmit}>

              {/* ── Email field ── */}
              <div className="mb-3">
                <div className="input-box login-input-box">
                  <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M5 6H19C19.3862 6 19.7213 6.21897 19.8879 6.53954L12.5547 11.4283C12.2188 11.6523 11.7812 11.6523 11.4453 11.4283L4.11209 6.53953C4.27868 6.21896 4.61377 6 5 6ZM4 8.8685V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.86852L13.6641 13.0924C12.6564 13.7642 11.3436 13.7642 10.3359 13.0924L4 8.8685ZM2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7Z" fill="#262965" />
                    </svg>
                  </div>
                  <div className="input-field login-input-field">
                    <input
                      className="box-shadow-none"
                      name="login[username]"
                      type="email"
                      id="login-email"
                      autoComplete="email"
                      placeholder=" "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="custom-input-label" htmlFor="login-email">
                      Email address
                    </label>
                  </div>
                </div>
              </div>

              {/* ── Password field ── */}
              <div className="mb-3">
                <div className="input-box login-input-box">
                  <div className="icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7V8H6C4.89543 8 4 8.89543 4 10V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V10C20 8.89543 19.1046 8 18 8H17V7C17 4.23858 14.7614 2 12 2ZM15 8V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V8H15ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#262965" />
                    </svg>
                  </div>
                  <div className="input-field login-input-field">
                    <input
                      className="box-shadow-none"
                      name="login[password]"
                      type={showPass ? "text" : "password"}
                      id="pass"
                      autoComplete="current-password"
                      placeholder=" "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="custom-input-label" htmlFor="pass">
                      Password
                    </label>
                  </div>
                  {/* Eye toggle — pure React state, zero DOM manipulation */}
                  <button
                    type="button"
                    className="login-eye-btn icon"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 17C16.1121 17 18.5866 13.933 19.683 12.1047C19.7081 12.063 19.7149 12.0278 19.7149 12C19.7149 11.9722 19.7081 11.937 19.683 11.8953C18.5866 10.067 16.1121 7 12 7C7.88795 7 5.41343 10.067 4.317 11.8953C4.29195 11.937 4.2851 11.9722 4.2851 12C4.2851 12.0278 4.29195 12.063 4.317 12.1047C5.41343 13.933 7.88795 17 12 17ZM21.3982 13.1334C20.2099 15.1148 17.215 19 12 19C6.78498 19 3.79008 15.1148 2.60179 13.1334C2.17953 12.4292 2.17953 11.5708 2.6018 10.8666C3.79008 8.88521 6.78498 5 12 5C17.215 5 20.2099 8.88521 21.3982 10.8666C21.8205 11.5708 21.8205 12.4292 21.3982 13.1334Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ── Save login toggle ── */}
              <div className="savelogin toggle-wrapper py-2 justify-content-center justify-content-md-start">
                <span className="toggle-label">Save login info</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={saveLogin}
                    onChange={(e) => setSaveLogin(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              {/* ── reCAPTCHA visual placeholder ──
                  Wire up @google-recaptcha/react-recaptcha-v3 in production   */}
              <div className="field-recaptcha login-recaptcha-wrap my-3">
                <div className="login-recaptcha-badge">
                  🔒 protected by reCAPTCHA
                </div>
              </div>

              {/* ── Submit button ── */}
              <button
                type="submit"
                className="btn btn-primary w-100"
                name="send"
                id="send2"
                disabled={loading}
              >
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {loading ? "Signing In…" : "Sign In"}
              </button>

              {/* ── Forgot password ── */}
              <div className="text-center text-md-start mt-2 mt-md-3">
                <Link className="action remind forgot-link" href="/customer/account/forgotpassword">
                  Forgot Your Password?
                </Link>
              </div>

            </form>
          </div>{/* end .login-card */}

        </div>{/* end .login-page-wrapper */}
      </div>{/* end .container */}
    </section>
  );
}