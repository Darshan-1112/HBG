"use client";

import { useState } from "react";

export default function AddMemberModal({ closeModal, onSave, quoteData = {} }) {
  const [hasSpouse,    setHasSpouse]    = useState(false);
  const [spouseGender, setSpouseGender] = useState("");
  const [spouseDob,    setSpouseDob]    = useState("");
  const [hasChildren,  setHasChildren]  = useState(false);
  const [childCount,   setChildCount]   = useState("");

  // DOB auto-formatter (MM/DD/YYYY)
  const formatDob = (raw) => {
    let v = raw.replace(/\D/g, "");
    if (v.length > 2 && v.length <= 4) v = v.slice(0, 2) + "/" + v.slice(2);
    else if (v.length > 4) v = v.slice(0, 2) + "/" + v.slice(2, 4) + "/" + v.slice(4, 8);
    return v;
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleContinue = async () => {
    if (hasSpouse) {
      if (!spouseGender) {
        alert("Please select your spouse's gender.");
        return;
      }
      if (!spouseDob) {
        alert("Please enter your spouse's date of birth.");
        return;
      }
    }
    if (hasChildren && !childCount) {
      alert("Please select the number of children.");
      return;
    }

    const familyData = {
      hasSpouse,
      spouseGender: hasSpouse ? spouseGender : "",
      spouseDob:    hasSpouse ? spouseDob    : "",
      hasChildren,
      childCount:   hasChildren ? childCount : "0",
      ...quoteData,
    };

    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(familyData),
      });
    } catch (err) {
      console.error("AddMemberModal save error:", err);
    }

    onSave(familyData);
    closeModal();
  };

  return (
    /* Backdrop — clicking outside closes modal */
    <div
      className="modal-backdrop-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={handleCancel}
    >
      {/* Modal panel — stop propagation so clicks inside don't close */}
      <div
        className="custom-modal"
        style={{
          maxWidth: 600,
          width: "100%",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="custom-modal-body p-4">

          {/* ── Title ── */}
          <h5 className="form-title text-center mb-4 fw-bold text-primary fs-32">
            Add Members To Your Quote
          </h5>

          {/* ── Spouse Toggle ── */}
          <div className="spouse-toggle-popup d-flex gap-5 justify-content-center align-items-center border-btm pb-3">
            <span className="fw-bold text-primary fs-16">Spouse/Partner</span>
            <div className="d-flex align-items-center gap-2">
              <label className="form-check-label mb-0 fw-semibold text-primary">No</label>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={hasSpouse}
                  onChange={(e) => {
                    setHasSpouse(e.target.checked);
                    setSpouseGender("");
                    setSpouseDob("");
                  }}
                />
              </div>
              <label className="form-check-label mb-0 fw-semibold text-primary">Yes</label>
            </div>
          </div>

          {/* ── Spouse Details ── */}
          {hasSpouse && (
            <>
              <div className="row py-4">
                <p className="form-label fw-bold text-primary text-center text-uppercase">
                  What is your spouse gender*
                </p>
                <div className="col-6">
                  <div className="gender-card d-flex align-items-center gap-2">
                    <input
                      type="radio"
                      name="modalSpouseGender"
                      id="modalSpouseMale"
                      className="form-check-input-1 m-0"
                      value="Male"
                      checked={spouseGender === "Male"}
                      onChange={() => setSpouseGender("Male")}
                    />
                    <label htmlFor="modalSpouseMale" className="mb-0 text-1 fs-14 fw-bold">Male</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="gender-card d-flex align-items-center gap-2">
                    <input
                      type="radio"
                      name="modalSpouseGender"
                      id="modalSpouseFemale"
                      className="form-check-input-1 m-0"
                      value="Female"
                      checked={spouseGender === "Female"}
                      onChange={() => setSpouseGender("Female")}
                    />
                    <label htmlFor="modalSpouseFemale" className="mb-0 text-1 fs-14 fw-bold">Female</label>
                  </div>
                </div>
              </div>

              <div className="pt-0 pb-4 border-btm">
                <p className="form-label fw-bold text-primary text-center text-uppercase">
                  What is your spouse date of birth?*
                </p>
                <div className="input-box w-100">
                  <div className="input-field">
                    <input
                      type="text"
                      className="spouse-dob"
                      placeholder="MM/DD/YYYY"
                      value={spouseDob}
                      maxLength={10}
                      onChange={(e) => setSpouseDob(formatDob(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── Children Toggle ── */}
          <div className="d-flex gap-5 justify-content-center align-items-center border-btm py-4">
            <span className="fw-bold text-primary fs-16">Child(ren)</span>
            <div className="d-flex align-items-center gap-2">
              <label className="form-check-label fw-semibold mb-0 text-primary">No</label>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={hasChildren}
                  onChange={(e) => {
                    setHasChildren(e.target.checked);
                    setChildCount("");
                  }}
                />
              </div>
              <label className="form-check-label text-primary fw-semibold mb-0">Yes</label>
            </div>
          </div>

          {/* ── Child Count ── */}
          {hasChildren && (
            <div className="children-section text-center border-btm py-4">
              <h6 className="fw-bold mb-3">How many children under the age of 26?*</h6>
              <div className="d-flex justify-content-center gap-5">
                {[{ v:"1", l:"1 Child" },{ v:"2", l:"2 Children" },{ v:"3", l:"3+ Children" }].map(({ v, l }) => (
                  <label key={v} className={`child-option children-${v}`}>
                    <input
                      type="radio"
                      name="modalChildCount"
                      value={v}
                      checked={childCount === v}
                      onChange={() => setChildCount(v)}
                    />
                    <span>{l}</span>
                  </label>
                ))}
              </div>
              <p className="note m-0 mt-4">Price is the same for 3 or more children.</p>
            </div>
          )}

          {/* ── Action Buttons ── */}
          <div className="popup-button d-flex justify-content-center pt-4 align-items-center gap-3">
            <button className="help-btn w-100" onClick={handleCancel}>Cancel</button>
            <button className="search-btn w-100" onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}