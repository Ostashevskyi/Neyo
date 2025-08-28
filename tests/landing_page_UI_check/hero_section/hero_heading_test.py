from playwright.sync_api import expect


def test_heading_text(home):
    heading_text = home.get_by_role("heading", name="Create the Future with AI", exact=True)
    expect(heading_text).to_be_visible()