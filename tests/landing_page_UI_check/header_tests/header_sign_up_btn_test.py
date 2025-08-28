from playwright.sync_api import expect



def test_header_sign_in_btn(home):
    sign_up_btn = home.get_by_text("Sign Up").first
    expect(sign_up_btn).to_be_visible()