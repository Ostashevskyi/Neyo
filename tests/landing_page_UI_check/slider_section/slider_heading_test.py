from playwright.sync_api import expect


def test_slider_heading_text(home):
    slider_heading_text = home.get_by_role("heading", name="Image Generator", exact=True)
    expect(slider_heading_text).to_be_visible()