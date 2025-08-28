from playwright.sync_api import expect


def test_header_log_in_btn(home):
    log_in_btn = home.get_by_text("Log in").first
    expect(log_in_btn).to_be_visible()