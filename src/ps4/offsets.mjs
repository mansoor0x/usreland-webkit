import { version } from "../utils.mjs";

export class Offsets {
  static get current() {
    if (Offsets._current === undefined) {
      let matched = false;
      for (const type of Offsets.types) {
        if (type.version === version.toString()) {
          matched = true;
          Offsets._current = new type();
          break;
        }
      }
      if (!matched) {
        throw new Error(`Unable to find impl for ${version} !!`);
      }
    }
    return Offsets._current;
  }
}

class V672 extends Offsets {
  static get version() { return "6.72"; }
  get wk_CSSFontFace_sizeof() { return 0xb0; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x58; }
  get wk_CSSFontFace_m_wrapper() { return 0x60; }
  get wk_CSSFontFace_m_status() { return 0x7a; }
  get wk_CSSFontFace_m_thread() { return 0xa0; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V700 extends Offsets {
  static get version() { return "7.00"; }
  get wk_CSSFontFace_sizeof() { return 0xb0; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x58; }
  get wk_CSSFontFace_m_wrapper() { return 0x60; }
  get wk_CSSFontFace_m_status() { return 0x7a; }
  get wk_CSSFontFace_m_thread() { return 0xa0; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V702 extends Offsets {
  static get version() { return "7.02"; }
  get wk_CSSFontFace_sizeof() { return 0xb0; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x58; }
  get wk_CSSFontFace_m_wrapper() { return 0x60; }
  get wk_CSSFontFace_m_status() { return 0x7a; }
  get wk_CSSFontFace_m_thread() { return 0xa0; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V720 extends Offsets {
  static get version() { return "7.20"; }
  get wk_CSSFontFace_sizeof() { return 0xb0; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x58; }
  get wk_CSSFontFace_m_wrapper() { return 0x60; }
  get wk_CSSFontFace_m_status() { return 0x7a; }
  get wk_CSSFontFace_m_thread() { return 0xa0; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V750 extends Offsets {
  static get version() { return "7.50"; }
  get wk_CSSFontFace_sizeof() { return 0xb0; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x58; }
  get wk_CSSFontFace_m_wrapper() { return 0x60; }
  get wk_CSSFontFace_m_status() { return 0x7a; }
  get wk_CSSFontFace_m_thread() { return 0xa0; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V755 extends Offsets {
  static get version() { return "7.55"; }
  get wk_CSSFontFace_sizeof() { return 0xb0; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x58; }
  get wk_CSSFontFace_m_wrapper() { return 0x60; }
  get wk_CSSFontFace_m_status() { return 0x7a; }
  get wk_CSSFontFace_m_thread() { return 0xa0; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V800 extends Offsets {
  static get version() { return "8.00"; }
  get wk_CSSFontFace_sizeof() { return 0xb0; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x58; }
  get wk_CSSFontFace_m_wrapper() { return 0x60; }
  get wk_CSSFontFace_m_status() { return 0x7a; }
  get wk_CSSFontFace_m_thread() { return 0xa0; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V803 extends Offsets {
  static get version() { return "8.03"; }
  get wk_CSSFontFace_sizeof() { return 0xb0; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x58; }
  get wk_CSSFontFace_m_wrapper() { return 0x60; }
  get wk_CSSFontFace_m_status() { return 0x7a; }
  get wk_CSSFontFace_m_thread() { return 0xa0; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V900 extends Offsets {
  static get version() { return "9.00"; }
  get wk_CSSFontFace_sizeof() { return 0xb8; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x60; }
  get wk_CSSFontFace_m_wrapper() { return 0x68; }
  get wk_CSSFontFace_m_status() { return 0x82; }
  get wk_CSSFontFace_m_thread() { return 0xa8; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V9001 extends Offsets {
  static get version() { return "9.01"; }
  get wk_CSSFontFace_sizeof() { return 0xb8; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x60; }
  get wk_CSSFontFace_m_wrapper() { return 0x68; }
  get wk_CSSFontFace_m_status() { return 0x82; }
  get wk_CSSFontFace_m_thread() { return 0xa8; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V9002 extends Offsets {
  static get version() { return "9.02"; }
  get wk_CSSFontFace_sizeof() { return 0xb8; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x60; }
  get wk_CSSFontFace_m_wrapper() { return 0x68; }
  get wk_CSSFontFace_m_status() { return 0x82; }
  get wk_CSSFontFace_m_thread() { return 0xa8; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V9003 extends Offsets {
  static get version() { return "9.03"; }
  get wk_CSSFontFace_sizeof() { return 0xb8; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x60; }
  get wk_CSSFontFace_m_wrapper() { return 0x68; }
  get wk_CSSFontFace_m_status() { return 0x82; }
  get wk_CSSFontFace_m_thread() { return 0xa8; }
  get wk_RET() { return 0x2bf0769n; }
  get wk_LEAVE_RET() { return 0x220a168n; }
  get wk_POP_R8_RET() { return 0x1e262f8n; }
  get wk_POP_R9_RET() { return 0x12a7b96n; }
  get wk_POP_R10_RET() { return 0x125abffn; }
  get wk_POP_R11_RET() { return 0x1c33581n; }
  get wk_POP_R12_RET() { return 0x17c39e1n; }
  get wk_POP_R13_RET() { return 0x202adebn; }
  get wk_POP_R14_RET() { return 0x2105ec1n; }
  get wk_POP_R15_RET() { return 0x1c24b31n; }
  get wk_POP_RAX_RET() { return 0x1e67954n; }
  get wk_POP_RBP_RET() { return 0x685e6en; }
  get wk_POP_RBX_RET() { return 0x4d6758n; }
  get wk_POP_RCX_RET() { return 0x2c09fcdn; }
  get wk_POP_RDI_RET() { return 0x13c9c15n; }
  get wk_POP_RDX_RET() { return 0x155683bn; }
  get wk_POP_RSI_RET() { return 0x2bf0851n; }
  get wk_POP_RSP_RET() { return 0x685d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2008fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1eb1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ba6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16d5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ced40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb3b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x143a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x141d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f0d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x294c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf33be4n; }
  get wk_expm1_builtin() { return 0x1d23560n; }
  get wk___imp___error() { return 0x2f4a4d0; }
  get wk___imp_strerror() { return 0x2f4a520; }
  get k__error() { return 0xcb80n; }
  get c_strerror() { return 0x394f0n; }
}

class V1000 extends Offsets {
  static get version() { return "10.00"; }
  get wk_CSSFontFace_sizeof() { return 0xb8; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x60; }
  get wk_CSSFontFace_m_wrapper() { return 0x68; }
  get wk_CSSFontFace_m_status() { return 0x82; }
  get wk_CSSFontFace_m_thread() { return 0xa8; }
  get wk_RET() { return 0x2c10769n; }
  get wk_LEAVE_RET() { return 0x221a168n; }
  get wk_POP_R8_RET() { return 0x1e362f8n; }
  get wk_POP_R9_RET() { return 0x12b7b96n; }
  get wk_POP_R10_RET() { return 0x126abffn; }
  get wk_POP_R11_RET() { return 0x1c43581n; }
  get wk_POP_R12_RET() { return 0x17d39e1n; }
  get wk_POP_R13_RET() { return 0x203adebn; }
  get wk_POP_R14_RET() { return 0x2115ec1n; }
  get wk_POP_R15_RET() { return 0x1c34b31n; }
  get wk_POP_RAX_RET() { return 0x1e77954n; }
  get wk_POP_RBP_RET() { return 0x696e6en; }
  get wk_POP_RBX_RET() { return 0x4e6758n; }
  get wk_POP_RCX_RET() { return 0x2c19fcdn; }
  get wk_POP_RDI_RET() { return 0x13d9c15n; }
  get wk_POP_RDX_RET() { return 0x156683bn; }
  get wk_POP_RSI_RET() { return 0x2c00851n; }
  get wk_POP_RSP_RET() { return 0x696d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2018fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ec1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ca6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16e5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ded40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb4b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x144a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x142d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f1d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x295c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf43be4n; }
  get wk_expm1_builtin() { return 0x1d33560n; }
  get wk___imp___error() { return 0x2f5a4d0; }
  get wk___imp_strerror() { return 0x2f5a520; }
  get k__error() { return 0xcc80n; }
  get c_strerror() { return 0x395f0n; }
}

class V1001 extends Offsets {
  static get version() { return "10.01"; }
  get wk_CSSFontFace_sizeof() { return 0xb8; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x60; }
  get wk_CSSFontFace_m_wrapper() { return 0x68; }
  get wk_CSSFontFace_m_status() { return 0x82; }
  get wk_CSSFontFace_m_thread() { return 0xa8; }
  get wk_RET() { return 0x2c10769n; }
  get wk_LEAVE_RET() { return 0x221a168n; }
  get wk_POP_R8_RET() { return 0x1e362f8n; }
  get wk_POP_R9_RET() { return 0x12b7b96n; }
  get wk_POP_R10_RET() { return 0x126abffn; }
  get wk_POP_R11_RET() { return 0x1c43581n; }
  get wk_POP_R12_RET() { return 0x17d39e1n; }
  get wk_POP_R13_RET() { return 0x203adebn; }
  get wk_POP_R14_RET() { return 0x2115ec1n; }
  get wk_POP_R15_RET() { return 0x1c34b31n; }
  get wk_POP_RAX_RET() { return 0x1e77954n; }
  get wk_POP_RBP_RET() { return 0x696e6en; }
  get wk_POP_RBX_RET() { return 0x4e6758n; }
  get wk_POP_RCX_RET() { return 0x2c19fcdn; }
  get wk_POP_RDI_RET() { return 0x13d9c15n; }
  get wk_POP_RDX_RET() { return 0x156683bn; }
  get wk_POP_RSI_RET() { return 0x2c00851n; }
  get wk_POP_RSP_RET() { return 0x696d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2018fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ec1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ca6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16e5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ded40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb4b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x144a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x142d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f1d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x295c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf43be4n; }
  get wk_expm1_builtin() { return 0x1d33560n; }
  get wk___imp___error() { return 0x2f5a4d0; }
  get wk___imp_strerror() { return 0x2f5a520; }
  get k__error() { return 0xcc80n; }
  get c_strerror() { return 0x395f0n; }
}

class V1050 extends Offsets {
  static get version() { return "10.50"; }
  get wk_CSSFontFace_sizeof() { return 0xb8; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x60; }
  get wk_CSSFontFace_m_wrapper() { return 0x68; }
  get wk_CSSFontFace_m_status() { return 0x82; }
  get wk_CSSFontFace_m_thread() { return 0xa8; }
  get wk_RET() { return 0x2c10769n; }
  get wk_LEAVE_RET() { return 0x221a168n; }
  get wk_POP_R8_RET() { return 0x1e362f8n; }
  get wk_POP_R9_RET() { return 0x12b7b96n; }
  get wk_POP_R10_RET() { return 0x126abffn; }
  get wk_POP_R11_RET() { return 0x1c43581n; }
  get wk_POP_R12_RET() { return 0x17d39e1n; }
  get wk_POP_R13_RET() { return 0x203adebn; }
  get wk_POP_R14_RET() { return 0x2115ec1n; }
  get wk_POP_R15_RET() { return 0x1c34b31n; }
  get wk_POP_RAX_RET() { return 0x1e77954n; }
  get wk_POP_RBP_RET() { return 0x696e6en; }
  get wk_POP_RBX_RET() { return 0x4e6758n; }
  get wk_POP_RCX_RET() { return 0x2c19fcdn; }
  get wk_POP_RDI_RET() { return 0x13d9c15n; }
  get wk_POP_RDX_RET() { return 0x156683bn; }
  get wk_POP_RSI_RET() { return 0x2c00851n; }
  get wk_POP_RSP_RET() { return 0x696d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2018fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ec1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ca6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16e5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ded40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb4b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x144a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x142d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f1d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x295c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf43be4n; }
  get wk_expm1_builtin() { return 0x1d33560n; }
  get wk___imp___error() { return 0x2f5a4d0; }
  get wk___imp_strerror() { return 0x2f5a520; }
  get k__error() { return 0xcc80n; }
  get c_strerror() { return 0x395f0n; }
}

class V1051 extends Offsets {
  static get version() { return "10.51"; }
  get wk_CSSFontFace_sizeof() { return 0xb8; }
  get wk_CSSFontFace_m_families() { return 0x10; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x34; }
  get wk_CSSFontFace_m_clients() { return 0x60; }
  get wk_CSSFontFace_m_wrapper() { return 0x68; }
  get wk_CSSFontFace_m_status() { return 0x82; }
  get wk_CSSFontFace_m_thread() { return 0xa8; }
  get wk_RET() { return 0x2c10769n; }
  get wk_LEAVE_RET() { return 0x221a168n; }
  get wk_POP_R8_RET() { return 0x1e362f8n; }
  get wk_POP_R9_RET() { return 0x12b7b96n; }
  get wk_POP_R10_RET() { return 0x126abffn; }
  get wk_POP_R11_RET() { return 0x1c43581n; }
  get wk_POP_R12_RET() { return 0x17d39e1n; }
  get wk_POP_R13_RET() { return 0x203adebn; }
  get wk_POP_R14_RET() { return 0x2115ec1n; }
  get wk_POP_R15_RET() { return 0x1c34b31n; }
  get wk_POP_RAX_RET() { return 0x1e77954n; }
  get wk_POP_RBP_RET() { return 0x696e6en; }
  get wk_POP_RBX_RET() { return 0x4e6758n; }
  get wk_POP_RCX_RET() { return 0x2c19fcdn; }
  get wk_POP_RDI_RET() { return 0x13d9c15n; }
  get wk_POP_RDX_RET() { return 0x156683bn; }
  get wk_POP_RSI_RET() { return 0x2c00851n; }
  get wk_POP_RSP_RET() { return 0x696d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2018fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ec1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ca6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16e5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ded40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb4b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x144a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x142d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f1d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x295c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf43be4n; }
  get wk_expm1_builtin() { return 0x1d33560n; }
  get wk___imp___error() { return 0x2f5a4d0; }
  get wk___imp_strerror() { return 0x2f5a520; }
  get k__error() { return 0xcc80n; }
  get c_strerror() { return 0x395f0n; }
}

class V1100 extends Offsets {
  static get version() { return "11.00"; }
  get wk_CSSFontFace_sizeof() { return 0xc0; }
  get wk_CSSFontFace_m_families() { return 0x18; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x38; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x3c; }
  get wk_CSSFontFace_m_clients() { return 0x68; }
  get wk_CSSFontFace_m_wrapper() { return 0x70; }
  get wk_CSSFontFace_m_status() { return 0x88; }
  get wk_CSSFontFace_m_thread() { return 0xb0; }
  get wk_RET() { return 0x2c10769n; }
  get wk_LEAVE_RET() { return 0x221a168n; }
  get wk_POP_R8_RET() { return 0x1e362f8n; }
  get wk_POP_R9_RET() { return 0x12b7b96n; }
  get wk_POP_R10_RET() { return 0x126abffn; }
  get wk_POP_R11_RET() { return 0x1c43581n; }
  get wk_POP_R12_RET() { return 0x17d39e1n; }
  get wk_POP_R13_RET() { return 0x203adebn; }
  get wk_POP_R14_RET() { return 0x2115ec1n; }
  get wk_POP_R15_RET() { return 0x1c34b31n; }
  get wk_POP_RAX_RET() { return 0x1e77954n; }
  get wk_POP_RBP_RET() { return 0x696e6en; }
  get wk_POP_RBX_RET() { return 0x4e6758n; }
  get wk_POP_RCX_RET() { return 0x2c19fcdn; }
  get wk_POP_RDI_RET() { return 0x13d9c15n; }
  get wk_POP_RDX_RET() { return 0x156683bn; }
  get wk_POP_RSI_RET() { return 0x2c00851n; }
  get wk_POP_RSP_RET() { return 0x696d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2018fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ec1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ca6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16e5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ded40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb4b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x144a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x142d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f1d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x295c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf43be4n; }
  get wk_expm1_builtin() { return 0x1d33560n; }
  get wk___imp___error() { return 0x2f5a4d0; }
  get wk___imp_strerror() { return 0x2f5a520; }
  get k__error() { return 0xcc80n; }
  get c_strerror() { return 0x395f0n; }
}

class V1101 extends Offsets {
  static get version() { return "11.01"; }
  get wk_CSSFontFace_sizeof() { return 0xc0; }
  get wk_CSSFontFace_m_families() { return 0x18; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x38; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x3c; }
  get wk_CSSFontFace_m_clients() { return 0x68; }
  get wk_CSSFontFace_m_wrapper() { return 0x70; }
  get wk_CSSFontFace_m_status() { return 0x88; }
  get wk_CSSFontFace_m_thread() { return 0xb0; }
  get wk_RET() { return 0x2c10769n; }
  get wk_LEAVE_RET() { return 0x221a168n; }
  get wk_POP_R8_RET() { return 0x1e362f8n; }
  get wk_POP_R9_RET() { return 0x12b7b96n; }
  get wk_POP_R10_RET() { return 0x126abffn; }
  get wk_POP_R11_RET() { return 0x1c43581n; }
  get wk_POP_R12_RET() { return 0x17d39e1n; }
  get wk_POP_R13_RET() { return 0x203adebn; }
  get wk_POP_R14_RET() { return 0x2115ec1n; }
  get wk_POP_R15_RET() { return 0x1c34b31n; }
  get wk_POP_RAX_RET() { return 0x1e77954n; }
  get wk_POP_RBP_RET() { return 0x696e6en; }
  get wk_POP_RBX_RET() { return 0x4e6758n; }
  get wk_POP_RCX_RET() { return 0x2c19fcdn; }
  get wk_POP_RDI_RET() { return 0x13d9c15n; }
  get wk_POP_RDX_RET() { return 0x156683bn; }
  get wk_POP_RSI_RET() { return 0x2c00851n; }
  get wk_POP_RSP_RET() { return 0x696d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2018fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ec1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ca6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16e5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ded40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb4b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x144a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x142d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f1d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x295c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf43be4n; }
  get wk_expm1_builtin() { return 0x1d33560n; }
  get wk___imp___error() { return 0x2f5a4d0; }
  get wk___imp_strerror() { return 0x2f5a520; }
  get k__error() { return 0xcc80n; }
  get c_strerror() { return 0x395f0n; }
}

class V1150 extends Offsets {
  static get version() { return "11.50"; }
  get wk_CSSFontFace_sizeof() { return 0xc0; }
  get wk_CSSFontFace_m_families() { return 0x18; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x30; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x38; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x3c; }
  get wk_CSSFontFace_m_clients() { return 0x68; }
  get wk_CSSFontFace_m_wrapper() { return 0x70; }
  get wk_CSSFontFace_m_status() { return 0x88; }
  get wk_CSSFontFace_m_thread() { return 0xb0; }
  get wk_RET() { return 0x2c10769n; }
  get wk_LEAVE_RET() { return 0x221a168n; }
  get wk_POP_R8_RET() { return 0x1e362f8n; }
  get wk_POP_R9_RET() { return 0x12b7b96n; }
  get wk_POP_R10_RET() { return 0x126abffn; }
  get wk_POP_R11_RET() { return 0x1c43581n; }
  get wk_POP_R12_RET() { return 0x17d39e1n; }
  get wk_POP_R13_RET() { return 0x203adebn; }
  get wk_POP_R14_RET() { return 0x2115ec1n; }
  get wk_POP_R15_RET() { return 0x1c34b31n; }
  get wk_POP_RAX_RET() { return 0x1e77954n; }
  get wk_POP_RBP_RET() { return 0x696e6en; }
  get wk_POP_RBX_RET() { return 0x4e6758n; }
  get wk_POP_RCX_RET() { return 0x2c19fcdn; }
  get wk_POP_RDI_RET() { return 0x13d9c15n; }
  get wk_POP_RDX_RET() { return 0x156683bn; }
  get wk_POP_RSI_RET() { return 0x2c00851n; }
  get wk_POP_RSP_RET() { return 0x696d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2018fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ec1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ca6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16e5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29ded40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb4b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x144a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x142d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f1d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x295c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf43be4n; }
  get wk_expm1_builtin() { return 0x1d33560n; }
  get wk___imp___error() { return 0x2f5a4d0; }
  get wk___imp_strerror() { return 0x2f5a520; }
  get k__error() { return 0xcc80n; }
  get c_strerror() { return 0x395f0n; }
}

class V1152 extends Offsets {
  static get version() { return "11.52"; }
  get wk_CSSFontFace_sizeof() { return 0xc8; }
  get wk_CSSFontFace_m_families() { return 0x20; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x38; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x40; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x44; }
  get wk_CSSFontFace_m_clients() { return 0x70; }
  get wk_CSSFontFace_m_wrapper() { return 0x78; }
  get wk_CSSFontFace_m_status() { return 0x90; }
  get wk_CSSFontFace_m_thread() { return 0xb8; }
  get wk_RET() { return 0x2c20769n; }
  get wk_LEAVE_RET() { return 0x222a168n; }
  get wk_POP_R8_RET() { return 0x1e462f8n; }
  get wk_POP_R9_RET() { return 0x12c7b96n; }
  get wk_POP_R10_RET() { return 0x127abffn; }
  get wk_POP_R11_RET() { return 0x1c53581n; }
  get wk_POP_R12_RET() { return 0x17e39e1n; }
  get wk_POP_R13_RET() { return 0x204adebn; }
  get wk_POP_R14_RET() { return 0x2125ec1n; }
  get wk_POP_R15_RET() { return 0x1c44b31n; }
  get wk_POP_RAX_RET() { return 0x1e87954n; }
  get wk_POP_RBP_RET() { return 0x6a6e6en; }
  get wk_POP_RBX_RET() { return 0x4f6758n; }
  get wk_POP_RCX_RET() { return 0x2c29fcdn; }
  get wk_POP_RDI_RET() { return 0x13e9c15n; }
  get wk_POP_RDX_RET() { return 0x157683bn; }
  get wk_POP_RSI_RET() { return 0x2c10851n; }
  get wk_POP_RSP_RET() { return 0x6a6d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2028fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ed1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16da6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16f5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29eed40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb5b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x145a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x143d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f2d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x296c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf53be4n; }
  get wk_expm1_builtin() { return 0x1d43560n; }
  get wk___imp___error() { return 0x2f6a4d0; }
  get wk___imp_strerror() { return 0x2f6a520; }
  get k__error() { return 0xcd80n; }
  get c_strerror() { return 0x396f0n; }
}

class V1200 extends Offsets {
  static get version() { return "12.00"; }
  get wk_CSSFontFace_sizeof() { return 0xc8; }
  get wk_CSSFontFace_m_families() { return 0x20; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x38; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x40; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x44; }
  get wk_CSSFontFace_m_clients() { return 0x70; }
  get wk_CSSFontFace_m_wrapper() { return 0x78; }
  get wk_CSSFontFace_m_status() { return 0x90; }
  get wk_CSSFontFace_m_thread() { return 0xb8; }
  get wk_RET() { return 0x2c20769n; }
  get wk_LEAVE_RET() { return 0x222a168n; }
  get wk_POP_R8_RET() { return 0x1e462f8n; }
  get wk_POP_R9_RET() { return 0x12c7b96n; }
  get wk_POP_R10_RET() { return 0x127abffn; }
  get wk_POP_R11_RET() { return 0x1c53581n; }
  get wk_POP_R12_RET() { return 0x17e39e1n; }
  get wk_POP_R13_RET() { return 0x204adebn; }
  get wk_POP_R14_RET() { return 0x2125ec1n; }
  get wk_POP_R15_RET() { return 0x1c44b31n; }
  get wk_POP_RAX_RET() { return 0x1e87954n; }
  get wk_POP_RBP_RET() { return 0x6a6e6en; }
  get wk_POP_RBX_RET() { return 0x4f6758n; }
  get wk_POP_RCX_RET() { return 0x2c29fcdn; }
  get wk_POP_RDI_RET() { return 0x13e9c15n; }
  get wk_POP_RDX_RET() { return 0x157683bn; }
  get wk_POP_RSI_RET() { return 0x2c10851n; }
  get wk_POP_RSP_RET() { return 0x6a6d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2028fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ed1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16da6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16f5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29eed40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb5b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x145a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x143d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f2d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x296c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf53be4n; }
  get wk_expm1_builtin() { return 0x1d43560n; }
  get wk___imp___error() { return 0x2f6a4d0; }
  get wk___imp_strerror() { return 0x2f6a520; }
  get k__error() { return 0xcd80n; }
  get c_strerror() { return 0x396f0n; }
}

class V1202 extends Offsets {
  static get version() { return "12.02"; }
  get wk_CSSFontFace_sizeof() { return 0xc8; }
  get wk_CSSFontFace_m_families() { return 0x20; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x38; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x40; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x44; }
  get wk_CSSFontFace_m_clients() { return 0x70; }
  get wk_CSSFontFace_m_wrapper() { return 0x78; }
  get wk_CSSFontFace_m_status() { return 0x90; }
  get wk_CSSFontFace_m_thread() { return 0xb8; }
  get wk_RET() { return 0x2c20769n; }
  get wk_LEAVE_RET() { return 0x222a168n; }
  get wk_POP_R8_RET() { return 0x1e462f8n; }
  get wk_POP_R9_RET() { return 0x12c7b96n; }
  get wk_POP_R10_RET() { return 0x127abffn; }
  get wk_POP_R11_RET() { return 0x1c53581n; }
  get wk_POP_R12_RET() { return 0x17e39e1n; }
  get wk_POP_R13_RET() { return 0x204adebn; }
  get wk_POP_R14_RET() { return 0x2125ec1n; }
  get wk_POP_R15_RET() { return 0x1c44b31n; }
  get wk_POP_RAX_RET() { return 0x1e87954n; }
  get wk_POP_RBP_RET() { return 0x6a6e6en; }
  get wk_POP_RBX_RET() { return 0x4f6758n; }
  get wk_POP_RCX_RET() { return 0x2c29fcdn; }
  get wk_POP_RDI_RET() { return 0x13e9c15n; }
  get wk_POP_RDX_RET() { return 0x157683bn; }
  get wk_POP_RSI_RET() { return 0x2c10851n; }
  get wk_POP_RSP_RET() { return 0x6a6d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2028fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ed1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16da6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x16f5cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29eed40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb5b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x145a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x143d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f2d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x296c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf53be4n; }
  get wk_expm1_builtin() { return 0x1d43560n; }
  get wk___imp___error() { return 0x2f6a4d0; }
  get wk___imp_strerror() { return 0x2f6a520; }
  get k__error() { return 0xcd80n; }
  get c_strerror() { return 0x396f0n; }
}

class V1300 extends Offsets {
  static get version() { return "13.00"; }
  get wk_CSSFontFace_sizeof() { return 0xd0; }
  get wk_CSSFontFace_m_families() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x40; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x48; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x4c; }
  get wk_CSSFontFace_m_clients() { return 0x78; }
  get wk_CSSFontFace_m_wrapper() { return 0x80; }
  get wk_CSSFontFace_m_status() { return 0x98; }
  get wk_CSSFontFace_m_thread() { return 0xc0; }
  get wk_RET() { return 0x2c30769n; }
  get wk_LEAVE_RET() { return 0x223a168n; }
  get wk_POP_R8_RET() { return 0x1e562f8n; }
  get wk_POP_R9_RET() { return 0x12d7b96n; }
  get wk_POP_R10_RET() { return 0x128abffn; }
  get wk_POP_R11_RET() { return 0x1c63581n; }
  get wk_POP_R12_RET() { return 0x17f39e1n; }
  get wk_POP_R13_RET() { return 0x205adebn; }
  get wk_POP_R14_RET() { return 0x2135ec1n; }
  get wk_POP_R15_RET() { return 0x1c54b31n; }
  get wk_POP_RAX_RET() { return 0x1e97954n; }
  get wk_POP_RBP_RET() { return 0x6b6e6en; }
  get wk_POP_RBX_RET() { return 0x506758n; }
  get wk_POP_RCX_RET() { return 0x2c39fcdn; }
  get wk_POP_RDI_RET() { return 0x13f9c15n; }
  get wk_POP_RDX_RET() { return 0x158683bn; }
  get wk_POP_RSI_RET() { return 0x2c20851n; }
  get wk_POP_RSP_RET() { return 0x6b6d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2038fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ee1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ea6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x1705cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29fed40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb6b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x146a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x144d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f3d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x297c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf63be4n; }
  get wk_expm1_builtin() { return 0x1d53560n; }
  get wk___imp___error() { return 0x2f7a4d0; }
  get wk___imp_strerror() { return 0x2f7a520; }
  get k__error() { return 0xce80n; }
  get c_strerror() { return 0x397f0n; }
}

class V1302 extends Offsets {
  static get version() { return "13.00"; }
  get wk_CSSFontFace_sizeof() { return 0xd0; }
  get wk_CSSFontFace_m_families() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x40; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x48; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x4c; }
  get wk_CSSFontFace_m_clients() { return 0x78; }
  get wk_CSSFontFace_m_wrapper() { return 0x80; }
  get wk_CSSFontFace_m_status() { return 0x98; }
  get wk_CSSFontFace_m_thread() { return 0xc0; }
  get wk_RET() { return 0x2c30769n; }
  get wk_LEAVE_RET() { return 0x223a168n; }
  get wk_POP_R8_RET() { return 0x1e562f8n; }
  get wk_POP_R9_RET() { return 0x12d7b96n; }
  get wk_POP_R10_RET() { return 0x128abffn; }
  get wk_POP_R11_RET() { return 0x1c63581n; }
  get wk_POP_R12_RET() { return 0x17f39e1n; }
  get wk_POP_R13_RET() { return 0x205adebn; }
  get wk_POP_R14_RET() { return 0x2135ec1n; }
  get wk_POP_R15_RET() { return 0x1c54b31n; }
  get wk_POP_RAX_RET() { return 0x1e97954n; }
  get wk_POP_RBP_RET() { return 0x6b6e6en; }
  get wk_POP_RBX_RET() { return 0x506758n; }
  get wk_POP_RCX_RET() { return 0x2c39fcdn; }
  get wk_POP_RDI_RET() { return 0x13f9c15n; }
  get wk_POP_RDX_RET() { return 0x158683bn; }
  get wk_POP_RSI_RET() { return 0x2c20851n; }
  get wk_POP_RSP_RET() { return 0x6b6d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2038fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ee1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ea6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x1705cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29fed40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb6b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x146a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x144d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f3d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x297c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf63be4n; }
  get wk_expm1_builtin() { return 0x1d53560n; }
  get wk___imp___error() { return 0x2f7a4d0; }
  get wk___imp_strerror() { return 0x2f7a520; }
  get k__error() { return 0xce80n; }
  get c_strerror() { return 0x397f0n; }
}

class V1304 extends Offsets {
  static get version() { return "13.00"; }
  get wk_CSSFontFace_sizeof() { return 0xd0; }
  get wk_CSSFontFace_m_families() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x40; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x48; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x4c; }
  get wk_CSSFontFace_m_clients() { return 0x78; }
  get wk_CSSFontFace_m_wrapper() { return 0x80; }
  get wk_CSSFontFace_m_status() { return 0x98; }
  get wk_CSSFontFace_m_thread() { return 0xc0; }
  get wk_RET() { return 0x2c30769n; }
  get wk_LEAVE_RET() { return 0x223a168n; }
  get wk_POP_R8_RET() { return 0x1e562f8n; }
  get wk_POP_R9_RET() { return 0x12d7b96n; }
  get wk_POP_R10_RET() { return 0x128abffn; }
  get wk_POP_R11_RET() { return 0x1c63581n; }
  get wk_POP_R12_RET() { return 0x17f39e1n; }
  get wk_POP_R13_RET() { return 0x205adebn; }
  get wk_POP_R14_RET() { return 0x2135ec1n; }
  get wk_POP_R15_RET() { return 0x1c54b31n; }
  get wk_POP_RAX_RET() { return 0x1e97954n; }
  get wk_POP_RBP_RET() { return 0x6b6e6en; }
  get wk_POP_RBX_RET() { return 0x506758n; }
  get wk_POP_RCX_RET() { return 0x2c39fcdn; }
  get wk_POP_RDI_RET() { return 0x13f9c15n; }
  get wk_POP_RDX_RET() { return 0x158683bn; }
  get wk_POP_RSI_RET() { return 0x2c20851n; }
  get wk_POP_RSP_RET() { return 0x6b6d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2038fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ee1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ea6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x1705cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29fed40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb6b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x146a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x144d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f3d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x297c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf63be4n; }
  get wk_expm1_builtin() { return 0x1d53560n; }
  get wk___imp___error() { return 0x2f7a4d0; }
  get wk___imp_strerror() { return 0x2f7a520; }
  get k__error() { return 0xce80n; }
  get c_strerror() { return 0x397f0n; }
}

class V1350 extends Offsets {
  static get version() { return "13.00"; }
  get wk_CSSFontFace_sizeof() { return 0xd0; }
  get wk_CSSFontFace_m_families() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x40; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x48; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x4c; }
  get wk_CSSFontFace_m_clients() { return 0x78; }
  get wk_CSSFontFace_m_wrapper() { return 0x80; }
  get wk_CSSFontFace_m_status() { return 0x98; }
  get wk_CSSFontFace_m_thread() { return 0xc0; }
  get wk_RET() { return 0x2c30769n; }
  get wk_LEAVE_RET() { return 0x223a168n; }
  get wk_POP_R8_RET() { return 0x1e562f8n; }
  get wk_POP_R9_RET() { return 0x12d7b96n; }
  get wk_POP_R10_RET() { return 0x128abffn; }
  get wk_POP_R11_RET() { return 0x1c63581n; }
  get wk_POP_R12_RET() { return 0x17f39e1n; }
  get wk_POP_R13_RET() { return 0x205adebn; }
  get wk_POP_R14_RET() { return 0x2135ec1n; }
  get wk_POP_R15_RET() { return 0x1c54b31n; }
  get wk_POP_RAX_RET() { return 0x1e97954n; }
  get wk_POP_RBP_RET() { return 0x6b6e6en; }
  get wk_POP_RBX_RET() { return 0x506758n; }
  get wk_POP_RCX_RET() { return 0x2c39fcdn; }
  get wk_POP_RDI_RET() { return 0x13f9c15n; }
  get wk_POP_RDX_RET() { return 0x158683bn; }
  get wk_POP_RSI_RET() { return 0x2c20851n; }
  get wk_POP_RSP_RET() { return 0x6b6d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2038fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ee1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ea6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x1705cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29fed40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb6b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x146a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x144d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f3d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x297c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf63be4n; }
  get wk_expm1_builtin() { return 0x1d53560n; }
  get wk___imp___error() { return 0x2f7a4d0; }
  get wk___imp_strerror() { return 0x2f7a520; }
  get k__error() { return 0xce80n; }
  get c_strerror() { return 0x397f0n; }
}

class V1352 extends Offsets {
  static get version() { return "13.52"; }
  get wk_CSSFontFace_sizeof() { return 0xd0; }
  get wk_CSSFontFace_m_families() { return 0x28; }
  get wk_CSSFontFace_m_featureSettings_m_buffer() { return 0x40; }
  get wk_CSSFontFace_m_featureSettings_m_size() { return 0x48; }
  get wk_CSSFontFace_m_featureSettings_m_capacity() { return 0x4c; }
  get wk_CSSFontFace_m_clients() { return 0x78; }
  get wk_CSSFontFace_m_wrapper() { return 0x80; }
  get wk_CSSFontFace_m_status() { return 0x98; }
  get wk_CSSFontFace_m_thread() { return 0xc0; }
  get wk_RET() { return 0x2c30769n; }
  get wk_LEAVE_RET() { return 0x223a168n; }
  get wk_POP_R8_RET() { return 0x1e562f8n; }
  get wk_POP_R9_RET() { return 0x12d7b96n; }
  get wk_POP_R10_RET() { return 0x128abffn; }
  get wk_POP_R11_RET() { return 0x1c63581n; }
  get wk_POP_R12_RET() { return 0x17f39e1n; }
  get wk_POP_R13_RET() { return 0x205adebn; }
  get wk_POP_R14_RET() { return 0x2135ec1n; }
  get wk_POP_R15_RET() { return 0x1c54b31n; }
  get wk_POP_RAX_RET() { return 0x1e97954n; }
  get wk_POP_RBP_RET() { return 0x6b6e6en; }
  get wk_POP_RBX_RET() { return 0x506758n; }
  get wk_POP_RCX_RET() { return 0x2c39fcdn; }
  get wk_POP_RDI_RET() { return 0x13f9c15n; }
  get wk_POP_RDX_RET() { return 0x158683bn; }
  get wk_POP_RSI_RET() { return 0x2c20851n; }
  get wk_POP_RSP_RET() { return 0x6b6d81n; }
  get wk_MOV_RAX_RCX_RET() { return 0x2038fa0n; }
  get wk_MOV_QWORD_PTR_RDI_RAX_RET() { return 0x1ee1f1bn; }
  get wk_MOV_RAX_QWORD_PTR_RDI_RET() { return 0x16ea6f0n; }
  get wk_PUSH_RAX_POP_RBP_RET() { return 0x1705cccn; }
  get wk_PUSH_RAX_PUSH_RBP_RET() { return 0x29fed40n; }
  get wk_PUSH_RBP_POP_RAX_RET() { return 0xb6b5d5n; }
  get wk_POP_RAX_MOV_RAX_QWORD_PTR_RDI_JMP_QWORD_PTR_RAX_8() { return 0x146a842n; }
  get wk_PUSH_RBP_MOV_RBP_RSP_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_20() { return 0x144d420n; }
  get wk_MOV_RSI_QWORD_PTR_RAX_10_CALL_QWORD_PTR_RAX_18() { return 0x1f3d7e0n; }
  get wk_PUSH_RSI_JMP_QWORD_PTR_RAX() { return 0x297c0e2n; }
  get wk_MOV_RDI_RSI_30_MOV_RAX_QWORD_PTR_RDI_CALL_QWORD_PTR_RAX_38() { return 0xf63be4n; }
  get wk_expm1_builtin() { return 0x1d53560n; }
  get wk___imp___error() { return 0x2f7a4d0; }
  get wk___imp_strerror() { return 0x2f7a520; }
  get k__error() { return 0xce80n; }
  get c_strerror() { return 0x397f0n; }
}

Offsets._current = Offsets._current || undefined;
Offsets.types = [
  V672, V700, V702, V720, V750, V755,
  V800, V803,
  V900, V9001, V9002, V9003,
  V1000, V1001, V1050, V1051,
  V1100, V1101, V1150, V1152,
  V1200, V1202,
  V1300, V1302, V1304, V1350, V1352
];
