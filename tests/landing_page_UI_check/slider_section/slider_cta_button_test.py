from playwright.sync_api import expect


def test_slider_cta_btn(home):
    cta_btn = home.get_by_role("button", name="Try Now")
    expect(cta_btn).to_be_visible()