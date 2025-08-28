from playwright.sync_api import expect




def test_cta_btn(home):
    cta_button = home.get_by_role("button", name="Get Started")
    expect(cta_button).to_be_visible()